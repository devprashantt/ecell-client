//import contact from
import { ContactForm, Work } from "../components";

// import responsive styles
import './../styles/css/ContactPage.css';

//import contact icons
import { BiLocationPlus } from "react-icons/bi";
import { RiGlobalLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const contacts = [
    {
      icon: <BiLocationPlus />,
      title: "Address",
      description: "1234 Street Name, City, England",
    },
    {
      icon: <RiGlobalLine />,
      title: "Website",
      description: "www.yourwebsite.com",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      description: "ecelliiitsonepat@gmail.com",
    },
    {
      icon: <HiOutlineMail />,
      title: "Email",
      description: "ecelliiitsonepat@gmail.com",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5% 3%",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: "0",
          }}
        >
          Contact
        </h1>
        <p
          style={{
            textAlign: "center",
            margin: "0",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2%",
          gap: "4%",
          backgroundColor: "white",
          borderRadius: "2rem",
          width: "100%",
        }}
        className="contact--block"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "2rem",
            backgroundColor: "#6854FC",
            padding: "4% 4% 6% 4%",
            borderRadius: "2rem",
          }}
          className="contact--block-info"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              gap: "1rem",
            }}
          >
            <p
              style={{
                margin: "0",
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              Contact Information
            </p>
            <p
              style={{
                margin: "0",
                color: "#fff",
              }}
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </p>
          </div>
          <div className="contact--info-details">
            {contacts.map((contact, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  {contact.icon}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                    }}
                  >
                    {contact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
      <Work />
    </div>
  );
};

export default Contact;
