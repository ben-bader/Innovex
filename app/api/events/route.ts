export async function GET() {
  const token = process.env.API_KEY;
  if (!token) throw new Error("EVENTBRITE_TOKEN missing");

  const url = "https://www.eventbriteapi.com/v3/events/search/?q=tech";

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Eventbrite API response:", text);
    return Response.json({ events: [] });
  }

  const data = await res.json();
  return Response.json({ events: data.events || [] });
}
