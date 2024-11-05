import { useRouteLoaderData, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventPage = () => {
  const { id } = useParams();
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <h1>Edit Event Id: {id}</h1>
      <EventForm  event={data.event} />
    </>
  );
};

export default EditEventPage;
