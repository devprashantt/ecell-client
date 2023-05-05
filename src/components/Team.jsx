const Team = () => {
  const team = [
    {
      name: "John Doe",
      title: "CEO",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "Viverra ut potenti ",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "CEO",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "Viverra ut potenti ",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "CEO",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "Viverra ut potenti ",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "CEO",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
    },
    {
      name: "John Doe",
      title: "Viverra ut potenti ",
      linkedin: "https://www.linkedin.com/",
      img: "https://www.webxcreation.com/event-recruitment/images/profile-1.jpg",
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
        gap: "2rem",
      }}
    >
      <h1
        style={{
          margin: "0",
        }}
      >
        Our Team
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
        diam quam. Scelerisque mus vel egestas justo, purus consequat nibh eget.
        Non risus feugiat porta integer.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "4rem",
          flexWrap: "wrap",
          maxWidth: "80%",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "150px",
                height: " 150px",
                borderRadius: "50%",
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
        ))}
      </div>
    </div>
  );
};

export default Team;
