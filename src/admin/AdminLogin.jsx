import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

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
      <h1>Admin Login</h1>
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
