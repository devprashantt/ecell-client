import { Link } from "react-router-dom";

// import responsive styles
import "./../styles/css/NavbarStyle.css";

//hamburger menu from react-icons
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

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
      name: "Leaderboard",
      link: "/leaderboard",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  let [collapseState, setCollapseState] = useState(false);

  const toggleCollapse = () => {
    if (!collapseState) {
      setCollapseState(true);
    } else {
      setCollapseState(false);
    }
    console.log(collapseState);
  };

  return (
    <div>
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
      </header>
      <div

        className={`${collapseState ? "collapse-links--state-open" : "collapse-links--state-collapse"}
        collapse-links`
        }>
        {menus.map((menu) => (
          <Link
            key={menu.name}
            style={{
              padding: "0.5rem 1rem",
              fontWeight: "normal",
              color: "black",
            }}
            to={menu.link}
            onClick={toggleCollapse}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
