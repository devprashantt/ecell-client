// import responsive styles
import "./../styles/css/ProcessStyle.css";

// import icon from react icons
import { FaRegLightbulb } from "react-icons/fa";

// import processing img
import { images } from "../constants";

const Process = () => {
  const process = [
    {
      id: 1,
      title: "Ideation and Validation",
      description:
        "We encourage our members to explore their ideas and think critically about their viability. We provide workshops, brainstorming sessions, and mentorship to help refine ideas, assess market potential, and validate concepts. Our goal is to assist aspiring entrepreneurs in identifying innovative and sustainable business ideas.",
      icon: (
        <FaRegLightbulb
          icon
          name="FaRegLightbulb"
          style={{
            color: "#B85A60",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      bgcolor: "#FCEDEE",
    },
    {
      id: 2,
      title: "Education and Skill Development",
      description:
        "Entrepreneurship requires a diverse skill set. We offer a variety of educational programs, including workshops, seminars, and guest lectures, to equip our members with the knowledge and skills needed to excel in the entrepreneurial landscape. Topics covered may include business planning, market research, financial management, marketing strategies, and pitching skills.",
      icon: (
        <FaRegLightbulb
          icon
          name="FaRegLightbulb"
          style={{
            color: "#2555BB",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      bgcolor: "#BED3FF",
    },
    {
      id: 3,
      title: "Mentorship and Guidance",
      description:
        "We believe in the power of mentorship. Our experienced mentors, consisting of successful entrepreneurs and industry professionals, provide one-on-one guidance, feedback, and support to our members. They share their expertise, offer valuable insights, and help navigate the challenges and complexities of entrepreneurship.",
      icon: (
        <FaRegLightbulb
          icon
          name="FaRegLightbulb"
          style={{
            color: "#0F642F",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      bgcolor: "#DEFEEA",
    },
    {
      id: 4,
      title: "Networking and Collaboration",
      description:
        "We understand the importance of building a strong network in the entrepreneurial ecosystem. We organize networking events, meetups, and conferences where our members can connect with like-minded individuals, potential co-founders, investors, and industry experts. These interactions foster collaboration, partnership opportunities, and knowledge sharing.",
      icon: (
        <FaRegLightbulb
          icon
          name="FaRegLightbulb"
          style={{
            color: "#B89500",
            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      bgcolor: "#FFEEA6",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        gap: "4rem",
        padding: "0 3%",
      }}
      className="process-component"
    >
      <img src={images.process} alt="process" className="process-img" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            margin: "0",
          }}
        >
          Our Process
        </h1>
        <p>
          We believe that a structured and well-defined approach, combined with
          the right resources and support, can significantly enhance the chances
          of entrepreneurial success. Here an overview of our processes:
        </p>
        <div
          className="process-block-processes"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {process.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "start",
                gap: "2rem",
              }}
              className="process-element-process"
            >
              <span
                style={{
                  padding: "0.8rem",
                  backgroundColor: item.bgcolor,
                  borderRadius: "20px",
                }}
              >
                {item.icon}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3
                  style={{
                    fontWeight: "bold",
                    margin: "0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
