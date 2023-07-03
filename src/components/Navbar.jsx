import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// import responsive styles
import "./../styles/sass/Navbar.scss";

//hamburger menu from react-icons
import { GiHamburgerMenu } from "react-icons/gi";
import { images } from "../constants";

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
      name: "Admin",
      link: "/admin",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef1 = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target) &&
      !event.target.classList.contains("navigation__profile__options__item")
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleClickInsideDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link to={"/"}>
            <img
              src={images.logo}
              alt="logo"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginBottom: "0.5rem",
                objectFit: "contain",
              }}
            />
          </Link>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            E Cell <span>IIIT Sonepat</span>
          </Link>
        </div>
        {/* middle part */}
        <div className="navbar-links">
          {menus.map((menu) => (
            <Link
              key={menu.name}
              style={{
                padding: "0.5rem 1rem",
                fontWeight: "medium",
                fontSize: "1.2rem",
                color: "black",
              }}
              to={menu.link}
            >
              {menu.name}
            </Link>
          ))}
        </div>
        {/* right part */}
        <div className="navbar-buttons">
          <a
            href="https://issuu.com/ecelliiitsonepat/docs/e_cell_iiit_sonepat"
            className="navbar__connect"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "#6854FC",
              padding: "0.8rem 1.6rem",
              borderRadius: "2rem",
            }}
          >
            Brochure
          </a>

          <div className="navigation__profile" ref={dropdownRef1}>
            <GiHamburgerMenu
              size="2rem"
              className="navigation__profile__image"
              onClick={toggleDropdown}
            />

            {isDropdownOpen && (
              <div
                className="navigation__profile__options"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                onClick={handleClickInsideDropdown}
              >
                <div role="none">
                  {menus.map((menu) => (
                    <Link
                      key={menu.name}
                      className="navigation__profile__options__item"
                      role="menuitem"
                      to={menu.link}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
