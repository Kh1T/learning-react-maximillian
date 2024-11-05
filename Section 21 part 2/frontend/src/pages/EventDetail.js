import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const event = useLoaderData();
  console.log(event);
  return (
    <>
      <EventItem event={event.event} />
      {/* <h1>Event Detail Id: {id}</h1> */}
    </>
  );
};
export default EventDetailPage;

export async function loader({ request, params }) {
  const { id } = params;
  const response = await fetch("http://localhost:8080/events/" + id);
  console.log("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
