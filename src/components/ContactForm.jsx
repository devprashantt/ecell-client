import { useState } from "react";

// import responsive styles
import "./../styles/css/ContactFormStyle.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    city: "",
    college: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [active, setActive] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setActive(true);
    setIsDisabled(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/contact`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(isSubmitted, data);
      console.log(isError, data);
      console.log(isSuccess, data);

      setIsSubmitted(true);
      setIsSuccess(true);
      setActive(false);
      console.log("Form submitted successfully", data);
    } catch (error) {
      setIsSubmitted(true);
      setIsError(true);
      console.error("Error submitting form", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
      className="form--component"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "1rem",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <label htmlFor="state">College:</label>
          <input
            type="text"
            id="college"
            placeholder="Enter your college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <label htmlFor="address">Message:</label>
        <input
          type="text"
          id="message"
          placeholder="Enter your message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isDisabled}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          marginTop: "1rem",
        }}
      >
        <button
          type="submit"
          style={{
            padding: "0 2rem",
            height: "50px",
            borderRadius: "0.8rem",
            border: "none",
            backgroundColor: "#6854FC",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          {active ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
