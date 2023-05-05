import PropTypes from "prop-types";

const Message = ({ heading, description }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "1.5% 3%",
        backgroundColor: "rgba(196, 196, 196, 0.15)",
      }}
    >
      <h1
        style={{
          textAlign: "start",
        }}
      >
        {heading}
      </h1>
      <div
        style={{
          height: "8rem",
          border: "3px solid #E2E2E2",
          margin: "0 2rem",
          borderRadius: "5px",
        }}
      ></div>
      <p
        style={{
          textAlign: "start",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

Message.propTypes = {
  heading: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};

export default Message;
