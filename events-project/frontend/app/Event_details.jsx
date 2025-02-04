"use client"

import { useEffect, useState } from "react";
import {get_event} from '../../backend/get_event.jsx'

export default function Event_details({ eventId }) {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const eventData = await get_event(eventId);
                setEvent(eventData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (eventId) {
            fetchEvent();
        }
    }, [eventId]);

    if (loading) return <p>Loading event details...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>{event?.name}</h1>
            <p>{event?.description}</p>
            <a href={event?.event_url}>View Event</a>
            <p>Details</p>
            <ul>
                <li>Start time: {event?.start}</li>
                <li>End time: {event?.end}</li>
            </ul>
        </div>
    );
}
