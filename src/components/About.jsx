import { Link } from "react-router-dom";

//images import
import { images } from "./../constants";

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
          Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
          Tristique est tellus non maecenas in egestas aliquam. Eget dolor
          pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
        </p>
        <Link
          to={"/about"}
          style={{
            textDecoration: "none",
            backgroundColor: "#6854FC",
            fontWeight: "bold",
            fontSize: "1rem",
            borderRadius: "20px",
            padding: "10px 15px",
          }}
        >
          About us
        </Link>
      </div>
    </div>
  );
};

export default About;
