import { useState } from "react";
import { updateEvent, createEvent } from "../services/eventApi";
import PropTypes from "prop-types";

const EventForm = ({ initialEvent }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: initialEvent ? initialEvent.title : "",
    description: initialEvent ? initialEvent.description : "",
    date: initialEvent ? initialEvent.date : "",
    registrationLink: initialEvent ? initialEvent.registrationLink : "",
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
    // Prevent default form submission
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    // Send request to server to create event
    await createEvent(formData);

    // Set loading state to false
    setIsLoading(false);

    // Redirect to event details page
    window.location.href = "/events/";
  };

  const handleUpdateEvent = async (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    // Send request to server to update event
    await updateEvent(initialEvent._id, formData);

    // Set loading state to false
    setIsLoading(false);

    // Redirect to event details page
    window.location.href = `/events/${initialEvent._id}`;
  };

  return (
    <form
      onSubmit={initialEvent ? handleUpdateEvent : handleCreateEvent}
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

      {initialEvent ? null : (
        <>
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
        </>
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
        {isLoading
          ? "Loading..."
          : initialEvent
          ? "Update Event"
          : "Create Event"}
      </button>
    </form>
  );
};

EventForm.propTypes = {
  initialEvent: PropTypes.object,
};

export default EventForm;
