import { Link } from "react-router-dom";

// import responsive styles
import "./../styles/css/WorkStyle.css";

//import work img
import { images } from "../constants";

const Work = () => {
  const works = [
    {
      id: 1,
      name: "Work 1",
      pic: images.work1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      link: "https://www.google.com",
    },
    {
      id: 2,
      name: "Work 2",
      pic: images.work2,

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      link: "https://www.google.com",
    },
    {
      id: 3,
      name: "Work 3",
      pic: images.work3,

      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      link: "https://www.google.com",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        padding: "0 3%",
      }}
    >
      <h1>Gallery</h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "50rem",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        Our Gallery section aims to provide a glimpse into the dynamic and
        engaging experiences that take place within our entrepreneurial
        ecosystem. Enjoy the visual journey through the IIIT Sonepat E-Cell
        Gallery and let the images inspire and motivate you to embark on your
        own entrepreneurial path!
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "2rem 0",
          gap: "1.5rem",
        }}
        className="work--block-images"
      >
        {works.map((work) => (
          <div key={work.id}>
            <img
              src={work.pic}
              alt={work.name}
              style={{
                maxWidth: "20rem",
                minHeight: "20rem",
                borderRadius: "1rem",
              }}
              className="work--element-img"
            />
          </div>
        ))}
      </div>
      <Link
        to={"/events"}
        style={{
          textDecoration: "none",
          color: "white",
          backgroundColor: "#6854FC",
          padding: "1rem 2rem",
          borderRadius: "2rem",
        }}
      >
        See all events
      </Link>
    </div>
  );
};

export default Work;
