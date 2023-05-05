// import icon from react icons
import { FaRegLightbulb } from "react-icons/fa";

// import processing img
import { images } from "../constants";

const Process = () => {
  const process = [
    {
      id: 1,
      title: "Tell us what you need",
      description:
        "Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu",
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
      title: "We'll review your request",
      description:
        "Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat cras tempus vitae. Ipsum consectetur quis diam hendrerit pharetra amet scelerisque. Elementum risus aliquam quam etiam. Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing faucibu.",
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
      title: "Connect with the right pros",
      description:
        "Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu",
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
      title: "Get the job done",
      description:
        "Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu",
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
    >
      <img src={images.process} alt="process" />
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
          Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
          Tristique est tellus non maecenas in egestas aliquam. Eget dolor
          pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
        </p>
        {process.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "start",
              gap: "2rem",
            }}
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
  );
};

export default Process;
