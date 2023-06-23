import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/sass/EventDetails.scss";
import { images } from "../constants";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/event/${id}`
      );
      const data = await res.json();
      setEvent(data);
    };
    fetchData();
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

  const { title, description, date, registrationLink, attendees } = event;

  return (
    <div className="event-details">
      <h1 className="event-details__title">{title}</h1>
      <img src={images.auditorium} alt="" className="event-details__image" />
      <div className="event-details__content">
        <h2 className="event-details__content__title">Event Details</h2>
        <p className="event-details__content__description">{description}</p>
        <p className="event-details__content__date">
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className="event-details__content__registration-link">
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </p>

        <div className="event-details__section">
          <h2 className="event-details__section-title">Event Attendees</h2>
          {attendees.length > 0 ? (
            <ul className="event-details__attendees-list">
              {attendees.map((attendee) => (
                <li key={attendee._id} className="event-details__attendee">
                  <img
                    className="event-details__attendee-image"
                    src={attendee.image}
                    alt={attendee.name}
                  />
                  <p className="event-details__attendee-name">
                    {attendee.name}
                  </p>
                  <p className="event-details__attendee-description">
                    {attendee.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No attendees yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
