import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";
const NewEventPage = () => {
  return (
    <>
      <EventForm method="POST" />
    </>
  );
};

export default NewEventPage;

export async function action({ request }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not add event." }, { status: 500 });
  }
  return redirect("/events");
}
