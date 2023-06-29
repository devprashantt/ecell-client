import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../styles/sass/EventDetails.scss";

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

  const { title, description, date, registrationLink, image } = event;

  return (
    <div className="event-details">
      <img src={image} alt="" className="event-details__image" />
      <h1 className="event-details__title">{title}</h1>
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
      </div>
    </div>
  );
};

export default EventDetails;
