// import { Link } from "react-router-dom";

//import components
import { images } from "../constants";
import { Message, Team } from "./../components";

// import responsive styles
import "./../styles/css/AboutPage.css";

//import images
// import { images } from "./../constants";

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
        }}
      >
        <img
          src={images.logo}
          alt="logo"
          style={{
            marginTop: "2rem",
            padding: "0",

            maxWidth: "10rem",
            maxHeight: "20rem",
          }}
        />
        <h1>About us</h1>
        <p
          style={{
            margin: "0",
            padding: "0 2em",
            textAlign: "center",
          }}
        >
          At the IIIT Sonepat E-Cell, we believe in fostering entrepreneurship
          and innovation among the talented students of IIIT Sonepat. Our
          mission is to inspire, educate, and empower the next generation of
          entrepreneurs, equipping them with the necessary skills and resources
          to transform their innovative ideas into successful ventures. Our
          E-Cell serves as a vibrant platform that encourages students to
          explore the world of entrepreneurship and provides them with a
          supportive community to nurture their entrepreneurial aspirations. We
          offer a wide range of programs, activities, and events designed to
          enhance the entrepreneurial mindset and ignite the spirit of
          innovation.
        </p>
        <a
          href="https://issuu.com/ecelliiitsonepat/docs/e_cell_iiit_sonepat"
          target="_blank"
          rel="noreferrer"
          style={{
            margin: "2rem 0",
            textDecoration: "none",
            color: "white",
            backgroundColor: "#6854FC",
            padding: "1rem 2rem",
            borderRadius: "2rem",
          }}
        >
          Brochure
        </a>
      </div>
      <Message
        heading={"You guessed it. We’re changing the game."}
        description={
          "Our mission is to provide a platform for students to explore, learn, and excel in the world of entrepreneurship. We aim to inspire, educate, and support individuals in their entrepreneurial journey, equipping them with the necessary skills, knowledge, and resources to thrive in a competitive business landscape."
        }
      />
      <Team />
      {/* <div
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
      </div> */}
      <p>Blogs(Coming soon)</p>
    </div>
  );
};

export default About;
