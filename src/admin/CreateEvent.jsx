import { EventForm } from "../components";

const CreateEvent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "2rem 0",
      }}
    >
      <h1
        style={{
          margin: "0",
        }}
      >
        Create Event
      </h1>
      <EventForm />
    </div>
  );
};

export default CreateEvent;
