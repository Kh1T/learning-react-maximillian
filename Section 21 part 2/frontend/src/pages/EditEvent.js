import { useParams } from "react-router-dom";
import { DUMMY_EVENTS } from "../dummy_events";
import EventForm from "../components/EventForm";
const EditEventPage = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Edit Event Id: {id}</h1>
      <EventForm method="PUT" event={DUMMY_EVENTS.find((e) => e.id === id)} />
    </>
  );
};

export default EditEventPage;
