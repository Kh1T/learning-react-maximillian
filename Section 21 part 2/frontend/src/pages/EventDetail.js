import { useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
import { DUMMY_EVENTS } from "../dummy_events";
const EventDetailPage = ({ event }) => {
  const { id } = useParams();
  console.log(DUMMY_EVENTS);
  return (
    <>
      <EventItem event={DUMMY_EVENTS.find((e) => e.id === id)} />
      <h1>Event Detail Id: {id}</h1>
    </>
  );
};
export default EventDetailPage;
