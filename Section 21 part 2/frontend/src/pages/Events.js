import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events.events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Fetching events failed." };
    // throw new Response(JSON.stringify({ message: "Fetching events failed." }), {
    //   status: 404,
    // });
    return json(
      { messsage: "Could not fetch" },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
