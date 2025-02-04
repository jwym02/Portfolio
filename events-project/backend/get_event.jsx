const token = 'LPSAXRTC2YD45CPS6VVG'

export async function get_event(id) {
    const url = `https://www.eventbriteapi.com/v3/events/${id}/?token=${token}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Error fetching event: ${response.statusText}`);
    }

    const data = await res.json();
    return {
        name: data.name?.text,
        description: data.description?.text,
        event_url: data.url,
        start: data.start?.local.slice(-8),
        end: data.end?.local.slice(-8)
    };
}
