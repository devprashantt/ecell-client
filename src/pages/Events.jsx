import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { EventCard } from "../components";
import "../styles/sass/Events.scss";

const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/event`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log("Response:", data);

      setEvents(data.events);

      console.log("Events fetched successfully", data.events);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="events">
      <h1 className="events__heading">Event Page</h1>
      <div className="events__container">
        {events.map((event) => {
          return (
            <Link to={`/events/${event._id}`} key={event._id}>
              <EventCard
                key={event._id}
                img={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                registrationLink={event.registrationLink}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
