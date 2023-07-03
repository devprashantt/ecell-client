import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

// import responsive styles
import "./../styles/css/TeamStyle.css";

import { team } from "../constants";

const Team = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 3%",
        gap: "2rem",
      }}
      className="team--component"
    >
      <h1
        style={{
          margin: "0",
          textAlign: "center",
        }}
      >
        Introducing the IIIT Sonepat E-Cell Team!
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Our team at IIIT Sonepat E-Cell is composed of dedicated individuals who
        are passionate about entrepreneurship and fostering a culture of
        innovation. Together, we work towards creating a supportive and
        inspiring environment for students to explore their entrepreneurial
        potential.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          maxWidth: "100%",
        }}
        className="team--block-members"
      >
        {team.map((member) => (
          <a
            href={member.linkedin}
            key={member.name}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
              className="team--block-member-info"
            >
              <LazyLoadImage
                src={member.img}
                alt={member.name}
                effect="opacity"
                style={{
                  width: "150px",
                  height: " 150px",
                  borderRadius: "50%",
                  backgroundColor: "lightgray",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{
                  margin: "0",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  margin: "0",
                  color: "rgba(0, 0, 0, 0.5)",
                }}
              >
                {member.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Team;
