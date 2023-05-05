import { Link } from "react-router-dom";

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
      {/* right part */}
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
      <div>
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
      {/* left part */}
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
        >
          Connect with us
        </Link>
        <GiHamburgerMenu size="2rem" />
      </div>
    </header>
  );
};

export default Navbar;
