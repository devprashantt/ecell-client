import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";

import "./../styles/sass/EventDetails.scss";

import { AuthContext } from "./../context/AuthContext";
import { deleteEvent, getEvent } from "../services/eventApi";

const EventDetails = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const handleDelete = async () => {
    await deleteEvent(id);
    window.location.href = "/events";
  };

  useEffect(() => {
    getEvent(id).then((res) => setEvent(res.data));
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
        {isLoggedIn && (
          <div>
            <p className="event-details__content__edit">
              <Link
                to={`/admin/edit-event/${id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Edit
              </Link>
            </p>
            <p
              onClick={handleDelete}
              style={{
                cursor: "pointer",
                color: "red",
              }}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
