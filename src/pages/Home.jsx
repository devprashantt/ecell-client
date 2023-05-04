//header from components
import { Header, EventsOrganized, Partner, Work, Message } from "../components";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
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
      {/* message */}
      <Message
        heading="We’re a lean creative agency that uses design and code to solve problems."
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, quibusdam, quia, quos voluptates voluptatibus quod voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,"
      />
      {/* our work */}
      <Work />
    </div>
  );
};

export default Home;
