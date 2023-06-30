import { Link } from "react-router-dom";

const paraStyle = {
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#6874fc",
  padding: "1rem",
  borderRadius: "1rem",
  cursor: "pointer",
};

const Admin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Admin Page</h1>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
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
