import { Link } from "react-router-dom";

//import components
import { Message, Team } from "./../components";

// import responsive styles
import './../styles/css/AboutPage.css';

//import images
import { images } from "./../constants";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            margin: "2rem 0 0 0",
          }}
        >
          About us
        </h1>
        <p
          style={{
            margin: "0",
            padding: "0 2em",
            textAlign: "center"
          }}
        >
          Pulvinar auctor nisl, volutpat turpis enim id.{" "}
        </p>
      </div>
      <Message
        heading={"You guessed it. We’re changing the game."}
        description={
          "Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra arcu nisi eu sit.Praesent diam non imperdiet imperdiet potenti tristique et. Amet nec."
        }
      />
      <Team />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(196, 196, 196, 0.15)",
          gap: "2rem",
          borderRadius: "0  2rem 2rem 0",
        }}
        className="job--block"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            paddingLeft: "3%",
          }}
          className="job--block-text"
        >
          <h1
            style={{
              margin: "0",
            }}
          >
            Join a global team of change-makers.
          </h1>
          <p>
            Viverra ut potenti aliquam feugiat dui imperdiet laoreet tempus sed.
            Elit cursus est lorem in est id nec. Quis diam posuere at nisl eget
            turpis sagittis nunc. Aliquet et ultrices purus, id. Sagittis erat
            nunc in parturient.
          </p>
          <Link
            to={"/jobs"}
            style={{
              textDecoration: "none",
              fontSize: "1.2rem",
              padding: "0.5rem 1rem",
              background: "#6854FC",
              borderRadius: "20px",
            }}
            className="job--element-openings"
          >
            View job openings
          </Link>
        </div>
        <img src={images.job} alt="job" className="job-image" />
      </div>
      <p>Blogs(Coming soon)</p>
    </div>
  );
};

export default About;
