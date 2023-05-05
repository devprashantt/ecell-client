import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
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
    setIsDisabled(true);

    try {
      const response = await fetch("url-to-submit-form-data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(isSubmitted, data);
      console.log(isError, data);
      console.log(isSuccess, data);

      setIsSubmitted(true);
      setIsSuccess(true);
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
        gap: "1rem",
        width: "100%",
      }}
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
            gap: "0.8rem",
          }}
        >
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={isDisabled}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            name="lastName"
            value={formData.lastName}
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
            gap: "0.8rem",
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
            gap: "0.8rem",
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
            gap: "0.8rem",
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
            gap: "0.8rem",
          }}
        >
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            placeholder="Enter your state"
            name="state"
            value={formData.state}
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
          gap: "0.8rem",
        }}
      >
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Enter your address"
          name="address"
          value={formData.address}
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
          Submit now
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
