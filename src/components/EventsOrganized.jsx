// events icon from rect-icons
import {
  RiCalendarCheckLine,
  RiCalendarEventLine,
  RiCalendarTodoLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const EventsOrganized = () => {
  const events = [
    {
      icon: (
        <RiCalendarCheckLine
          style={{
            color: "#6854FC",

            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      title: "Talk With Alumni",
      description:
        "Life is about the experience,Talking with Alumni enables the..",
    },
    {
      icon: (
        <RiCalendarEventLine
          style={{
            color: "#6854FC",

            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      title: "Workshops",
      description:
        "Workshops are important for raising awareness within the community..",
    },
    {
      icon: (
        <RiCalendarTodoLine
          style={{
            color: "#6854FC",

            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      title: "Webinars",
      description: "Webinars are another way to expand our knowledge..",
    },
    {
      icon: (
        <RiCheckboxCircleLine
          style={{
            color: "#6854FC",

            height: "2rem",
            width: "2rem",
          }}
        />
      ),
      title: "Bootcamp",
      description: "Explain you're the most powerful factor to..",
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
      <h1>Events Organized</h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "50rem",
          color: "rgba(0, 0, 0, 0.5)",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quibusdam, quia, quos voluptates voluptatibus quod
        voluptatem quas doloribus quidem voluptate. Quisquam voluptatum,
      </p>
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(15rem, 1fr))",
          gap: "1rem",
          margin: "2rem 0",
        }}
      >
        {events.map((event) => (
          <div
            key={event.title}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              padding: "1rem 0",

              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                width: "5rem",
                height: "5rem",

                borderRadius: "50%",
                backgroundColor: "#F0EEFF",
              }}
            >
              {event.icon}
            </div>
            <div>
              <h3
                style={{
                  textAlign: "center",
                  color: "#6854FC",
                }}
              >
                {event.title}
              </h3>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.5)",
                  textAlign: "center",
                  maxWidth: "20rem",
                }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsOrganized;
