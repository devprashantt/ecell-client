import PropTypes from "prop-types";

import "../styles/sass/EventCard.scss";

const EventCard = ({ title, img, description, date, registrationLink }) => {
  return (
    <div className="event">
      <div className="event__img">
        <img src={img} />
      </div>
      <div className="event__content">
        <h4 className="event__title">{title}</h4>
        <p>{description}</p>
        <div className="event__more">
          <p>{date}</p>
          <p>{registrationLink}</p>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.any.isRequired,
  img: PropTypes.any.isRequired,
  registrationLink: PropTypes.string.isRequired,
};

export default EventCard;
