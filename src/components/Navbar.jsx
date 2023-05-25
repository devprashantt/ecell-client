import { Link } from "react-router-dom";

// import responsive styles
import './../styles/css/NavbarStyle.css';

//hamburger menu from react-icons
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  let state = "collapse";

  const toggleCollapse = () => {
    if (state === "collapse") {
      state = "open";
    } else {
      state = "collapse";
    }
  }

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5% 3%",
        backgroundColor: "white",
      }}
    >
      {/* left part */}
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          color: "black",
          fontSize: "1.5rem",
        }}
      >
        E Cell <span>IIIT Sonepat</span>
      </a>
      {/* middle part */}
      <div className="navbar-links">
        {menus.map((menu) => (
          <Link
            key={menu.name}
            style={{
              padding: "0.5rem 1rem",
              fontWeight: "normal",
              color: "black",
            }}
            to={menu.link}
          >
            {menu.name}
          </Link>
        ))}
      </div>
      {/* right part */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          style={{
            padding: "0.5rem 1rem",
            textDecoration: "none",
            fontWeight: "600",
            color: "white",
            backgroundColor: "#6854FC",
            borderRadius: "1rem",
          }}
          to="/contact"
          className="navbar-link-contact"
        >
          Connect with us
        </Link>
        <GiHamburgerMenu size="2rem" onClick={toggleCollapse} />
      </div>

      <div

        className={`collapse-links--state-${state}`}>
        {menus.map((menu) => (
          <Link
            key={menu.name}
            style={{
              padding: "0.5rem 1rem",
              fontWeight: "normal",
              color: "black",
            }}
            to={menu.link}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
