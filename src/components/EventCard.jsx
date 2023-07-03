import PropTypes from "prop-types";
import "../styles/sass/EventCard.scss";

const formatDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
};

function truncateStringToWords(str, numWords) {
  const words = str.split(" ");
  const truncatedWords = words.slice(0, numWords);
  const truncatedString = truncatedWords.join(" ");
  return truncatedString;
}

const EventCard = ({ title, img, description, date, registrationLink }) => {
  const currentDate = new Date();
  const eventDate = new Date(date);
  const dateFormatted = formatDate(date);
  const truncatedString = truncateStringToWords(description, 25);

  let linkComponent;
  if (eventDate < currentDate) {
    linkComponent = (
      <p
        style={{
          color: "red",
        }}
      >
        Event Ended
      </p>
    );
  } else {
    linkComponent = (
      <a
        href={registrationLink}
        style={{
          textDecoration: "none",
          color: "#6874fc",
        }}
      >
        Register
      </a>
    );
  }

  return (
    <div className="event">
      <div className="event__img">
        <img src={img} alt={title} />
      </div>
      <div className="event__content">
        <h4 className="event__title">{title}</h4>
        <p>{truncatedString}...</p>
        <div className="event__more">
          <p>{dateFormatted}</p>
          <p className="registration">{linkComponent}</p>
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
