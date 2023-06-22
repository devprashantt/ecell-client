import PropTypes from "prop-types";

const CollegeCard = ({ image, name, desc, rank, rating }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "1rem",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",

        padding: "1rem 2rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          width: "80%",
        }}
      >
        <img
          src={image}
          alt="college"
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            objectFit: "cover",

            boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
          }}
        />
        <div>
          <h4
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: "0.5rem 0",
              color: "#333",
            }}
          >
            {name}
          </h4>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "normal",
              margin: "0.5rem 0",
            }}
          >
            {desc}
          </p>
        </div>
      </div>
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",

          textAlign: "right",
          gap: "1rem",

          marginLeft: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#6874fc",
            margin: "0",
          }}
        >
          Rank: {rank}
        </p>
        <p
          style={{
            margin: "0",
          }}
        >
          Rating: {rating}
        </p>
      </div>
    </div>
  );
};

CollegeCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default CollegeCard;
