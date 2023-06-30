import { useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    registrationLink: "",
    passcode: "",
    email: "",
    image: "",
    croppedImage: null,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // Show preview of the selected image
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
        croppedImage: reader.result,
      }));
    };
    reader.readAsDataURL(file);

    // Perform image cropping logic here
    // ...
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST}/event/create`,
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
        // Event created successfully
        console.log("Event created successfully");
        // Perform any additional actions, such as displaying a success message or redirecting to another page
      } else {
        // Failed to create event
        console.error("Failed to create event");
        // Handle the error, such as displaying an error message to the user
      }
    } catch (error) {
      console.error("Error creating event:", error);
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
      <h1>Create Event</h1>
      <form
        onSubmit={handleCreateEvent}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
        }}
      >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="registrationLink">Registration Link:</label>
        <input
          type="text"
          id="registrationLink"
          name="registrationLink"
          value={formData.registrationLink}
          onChange={handleChange}
        />

        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            margin: "2rem 0 0 0",
          }}
        >
          <label
            htmlFor="image"
            style={{
              margin: "0",
            }}
          >
            Banner:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleImageChange}
            style={{
              border: "none",
              height: "100%",
              margin: "0",
            }}
          />
        </div>

        {/* Show image preview */}
        {formData.croppedImage && (
          <div>
            <h4>Image Preview:</h4>
            <img
              src={formData.croppedImage}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
        )}

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            backgroundColor: "#6854fc",
            border: "none",
            borderRadius: "1rem",
            outline: "none",
            color: "white",
            padding: "1rem",
            cursor: "pointer",
          }}
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
