import PropTypes from "prop-types";

const LinkedInBadge = ({ name, headline, location, profileImage, link }) => {
  return (
    <a
      href={link}
      style={{
        textDecoration: "none",
        cursor: "pointer",
        color: "#000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={profileImage}
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
          }}
        />
        <h2
          style={{
            fontSize: "1.5rem",
            marginBottom: "10px",
            color: "#333", // Updated name color
            fontWeight: "bold", // Added font weight
          }}
        >
          {name}
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#666",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {headline}
        </p>
        <p style={{ fontSize: "0.9rem", color: "#999" }}>{location}</p>
      </div>
    </a>
  );
};

LinkedInBadge.propTypes = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkedInBadge;
