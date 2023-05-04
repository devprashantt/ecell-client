import { Link } from "react-router-dom";

//import images from assets
import { images } from "./../constants";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "100vh",
        padding: "0 3%",
        gap: "5rem",
      }}
    >
      {/* left part */}
      <div>
        {/* highlight */}
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",

            background: "rgba(196, 196, 196, 0.2)",
            padding: "0.2rem 1rem",
            borderRadius: "1rem",

            width: "fit-content",

            gap: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: "2rem",
              height: "2rem",

              borderRadius: "50%",
              backgroundColor: "#FFE600",
            }}
          ></div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "start",
            }}
          >
            <span>ESTD</span> 2020
          </p>
        </div>
        {/* heading */}
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "start",
          }}
        >
          Entrepreneurship Cell <br />
          <span>IIIT Sonepat</span>
        </h1>
        {/* description */}
        <p
          style={{
            fontSize: "1.2rem",
            textAlign: "start",

            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          Entrepreneurship Cell of IIIT Sonepat is a student-run organization
          that aims to foster the spirit of entrepreneurship among students and
          help them in their entrepreneurial journey.
        </p>
        {/* buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            width: "fit-content",
            gap: "1rem",
          }}
        >
          <button
            style={{
              background: "#6854FC",
              border: "none",
              borderRadius: "1rem",

              padding: "0.5rem 1rem",

              fontSize: "1.2rem",
              color: "#fff",

              cursor: "pointer",
            }}
          >
            Know More
          </button>
          <Link
            style={{
              color: "#6854FC",
              border: "none",

              fontSize: "1.2rem",

              textDecoration: "none",
            }}
          >
            Browse our works
          </Link>
        </div>
      </div>
      {/* hero img */}
      <img src={images.message} alt="message" />
    </div>
  );
};

export default Header;
