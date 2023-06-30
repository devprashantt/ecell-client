import { Link } from "react-router-dom";

const paraStyle = {
  fontWeight: "medium",
  color: "white",
  backgroundColor: "#6874fc",
  padding: "1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
};

const textStyle = {
  fontWeight: "bold",
  fontSize: "2rem",
  marginBottom: "1rem",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  textStyle: "center",
};

const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        padding: "2%",
      }}
    >
      <div className="admin-page">
        <h2 className="admin-page__heading" style={textStyle}>
          Admin Page
        </h2>

        <p
          className="admin-page__desc"
          style={{
            textAlign: "center",
          }}
        >
          Welcome to the Admin Page, where you have full control and access to
          manage and oversee various aspects of the platform. As an admin, you
          play a crucial role in ensuring the smooth operation and success of
          the system.
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <Link to="/admin/create-event">
            <p style={paraStyle}>Create Event</p>
          </Link>
          <Link to="/admin/points-distribution">
            <p style={paraStyle}>Points Distribution</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
