//header from components
import {
  Header,
  EventsOrganized,
  Partner,
  Work,
  Message,
  Process,
  About,
  Service,
} from "../components";

const Home = () => {
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
      {/* header and main section */}
      <Header />
      {/* horizontal section */}
      <hr />
      {/* events organized */}
      <EventsOrganized />
      {/* partner */}
      <Partner />
      {/* our working process */}
      <Process />
      {/* our work */}
      <Work />
      {/* message */}
      <Message
        heading="We’re a lean creative agency that uses design and code to solve problems."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,"
      />
      <About />
      {/* divider */}
      <hr
        style={{
          width: "100%",
          height: "4px",
          backgroundColor: "#E8E8E8",
        }}
      />
      {/* services by us */}
      <Service />
    </div>
  );
};

export default Home;
