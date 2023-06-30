import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { images } from "../constants";

const AdminLogin = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    passcode: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/admin`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("Form submitted successfully", data);

      if (response.status === 201) {
        console.log("Loggedin successfully");
        // Perform any additional actions, such as displaying a success message or redirecting to another page
        login();
        window.location.reload();
      } else {
        // Failed to create event
        console.error("Failed");
        // Handle the error, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Error creating even:", error);
      // Handle the error, such as displaying an error message to the user
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={images.logo}
        alt="logo"
        style={{
          width: "6rem",
          height: "6rem",
          marginTop: "2rem",
        }}
      />
      <h1
        style={{
          marginTop: "2rem 0 0 0",
        }}
      >
        Admin Login
      </h1>
      <p
        className="admin-page__desc"
        style={{
          textAlign: "center",
          width: "90%",
        }}
      >
        Welcome to the Admin Page, where you have full control and access to
        manage and oversee various aspects of the platform. As an admin, you
        play a crucial role in ensuring the smooth operation and success of the
        system.
      </p>
      <form
        onSubmit={handleCreateEvent}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
        }}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="passcode">Passcode:</label>
        <input
          type="password"
          id="passcode"
          name="passcode"
          value={formData.passcode}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            marginTop: "2rem",
            backgroundColor: "#6854fc",
            border: "none",
            borderRadius: "1rem",
            outline: "none",
            color: "white",
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
