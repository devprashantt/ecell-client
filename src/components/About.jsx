import { Link } from "react-router-dom";

//images import
import { images } from "./../constants";

// import responsive styles
import "./../styles/css/AboutStyle.css";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
        padding: "0 3%",
      }}
      className="about--component"
    >
      <img src={images.about} alt="about" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Designed and built by an astonishing creative team.
        </h1>
        <p
          style={{
            fontSize: "1rem",
            margin: "0",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Experience the magic of our creative team and let us bring your vision
          to life with unmatched creativity, technical expertise, and a passion
          for delivering remarkable results.{" "}
        </p>
        <Link
          to={"/about"}
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#6854FC",
            padding: "1rem 2rem",
            borderRadius: "2rem",
          }}
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default About;
