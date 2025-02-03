const token = process.env.eventbrite_token

export default async function get_event(id) {
    const url = `https://www.eventbriteapi.com/v3/events/${id}/?token=${token}`;
    const res = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching event: ${response.statusText}`);
    }
    const data = res.json();
    const name = data['name']['text'];
    const description = data['description']['text'];
    const event_url = data['url'];
}
