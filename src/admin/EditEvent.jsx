// Example usage on the update event page
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getEvent } from "../services/eventApi";

import { EventForm } from "../components";

const EditEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Fetch the event data from the server using the eventId
    const fetchEvent = async () => {
      const res = await getEvent(id);
      setEvent(res.data);
    };

    fetchEvent();
  }, [id]);

  if (!event) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <h1
        style={{
          margin: "0",
        }}
      >
        Update Event
      </h1>
      <EventForm initialEvent={event} />
    </div>
  );
};

export default EditEvent;
