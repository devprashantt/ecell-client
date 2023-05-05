import { Link } from "react-router-dom";

// import entrepreneurship from "react-icons
import { FaCloud } from "react-icons/fa";

// import images
import { images } from "./../constants";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      icon: (
        <FaCloud
          style={{
            color: "#6854FC",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      icon: (
        <FaCloud
          style={{
            color: "#6854FC",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      icon: (
        <FaCloud
          style={{
            color: "#6854FC",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,",
      icon: (
        <FaCloud
          style={{
            color: "#6854FC",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "2rem",
        padding: "0 3%",
      }}
    >
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
            fontSize: "2.5rem",
            fontWeight: "700",
            lineHeight: "3rem",
            letterSpacing: "-0.05em",
            margin: "0",
          }}
        >
          Ultimate Services for your businesses.
        </h1>
        <p>
          Nunc, porta phasellus nisl ac risus eget lectus neque, mauris.
          Dictumst mauris, id eget tellus tincidunt sit nisi, non cras.{" "}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2.5rem",
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",

                  flex: 1,
                  maxWidth: "300px",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",

                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem",
                    borderRadius: "50%",

                    backgroundColor: "#F0EEFF",
                  }}
                >
                  {service.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    margin: "0",
                    color: "#6854FC",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    margin: "0",
                  }}
                >
                  {service.description.substring(0, 100)}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          to={"/events"}
          style={{
            fontSize: "1rem",
            backgroundColor: "#6854FC",
            padding: "0.5rem 1.5rem",
            borderRadius: "0.5rem",
            margin: "1rem 0",
          }}
        >
          See all
        </Link>
      </div>
      <img src={images.process} alt="" />
    </div>
  );
};

export default Service;
