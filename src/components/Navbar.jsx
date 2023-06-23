import { Link } from "react-router-dom";

// import responsive styles
import "./../styles/css/NavbarStyle.css";

//hamburger menu from react-icons
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

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

  let [collapseOpenState, setCollapseOpenState] = useState(false);

  const collapsableRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        !collapsableRef.current?.contains(event.target)
        &&

        /*
        The below code is for closing the collapse
        on clicking outside of the collapse
        but not on the hamburger

        I request you to not change the below code
        as it is the only one that works without
        breaking the collapsable UI.

        Don't ask me how but it just works.
        IT WORKS!!
        */
        !event.target.className.includes("hamburger")
        // !event.target.classList.includes("hamburger")
      ) {
        setCollapseOpenState(false);
        // toggleCollapse();
        console.log(event.target, "useeffect called");
      }
    }

    window.addEventListener('click', handler);

    return () => window.removeEventListener('click', handler);
  }, [])

  // window.onclick = (event) => {
  //   if (!event.target.classList.contains('collapseOpen-links')) {
  //     setCollapseOpenState(false);
  //   }
  // }

  const toggleCollapse = () => {
    if (!collapseOpenState) {
      setCollapseOpenState(true);
    } else {
      setCollapseOpenState(false);
    }
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
          <GiHamburgerMenu size="2rem" onClick={toggleCollapse} className="hamburger" />
        </div>


        <div

          className={`${collapseOpenState ? "collapse-links--state-open" : "collapse-links--state-collapse"}
        collapse-links`
          }
          ref={collapsableRef}>
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
      </header>


      {/* <div
        className={"collapseOpen-links--component"}></div> */}

    </div>
  );
};

export default Navbar;
