import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { EventCard } from "../components";
import "../styles/sass/Events.scss";
import { images } from "../constants";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          margin: "0",
        }}
      >
        <img
          src={images.logo}
          alt="logo"
          style={{
            width: "6rem",
            height: "6rem",
            marginTop: "2rem 0 0 0",
          }}
        />
        <h1
          className="events__heading"
          style={{
            textAlign: "center",
          }}
        >
          Event Page
        </h1>
        <p
          style={{
            textAlign: "center",
          }}
        >
          IIIT Sonepat E-cell, also known as the Entrepreneurship Cell of the
          Indian Institute of Information Technology (IIIT) Sonepat, is a
          student-run organization dedicated to promoting entrepreneurship and
          fostering an entrepreneurial spirit among students. The E-cell
          organizes various events throughout the year to provide a platform for
          budding entrepreneurs to learn, network, and showcase their ideas.Here
          are some events organized by IIIT Sonepat E-cell.
        </p>
      </div>
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
