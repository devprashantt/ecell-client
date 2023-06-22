import PropTypes from "prop-types";

import "../styles/sass/EventCard.scss";

//formatting date function
const formatDate = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString("default", { month: "long" });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
};

//description length
function truncateStringToWords(str, numWords) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Get the desired number of words
  const truncatedWords = words.slice(0, numWords);

  // Join the words back into a string
  const truncatedString = truncatedWords.join(" ");

  // Return the truncated string
  return truncatedString;
}

const EventCard = ({ title, img, description, date, registrationLink }) => {
  const dateFormatted = formatDate(date);
  const truncatedString = truncateStringToWords(description, 25);
  return (
    <div className="event">
      <div className="event__img">
        <img src={img} />
      </div>
      <div className="event__content">
        <h4 className="event__title">{title}</h4>
        <p>{truncatedString}...</p>
        <div className="event__more">
          <p>{dateFormatted}</p>
          <a
            href={{ registrationLink }}
            style={{
              textDecoration: "none",
              color: "#6874fc",
            }}
          >
            {" "}
            Register
          </a>
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
