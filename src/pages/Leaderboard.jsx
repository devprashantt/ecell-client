// src/components/Leaderboard.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient";

import { CollegeCard } from "../components";
import "../styles/sass/Leaderboard.scss";
import { images } from "../constants";

const Leaderboard = () => {
  const [colleges, setColleges] = useState([
    { name: "IIIT Sonepat", _id: "123" },
    { name: "IIIT Delhi", _id: "456" },
  ]);

  // useEffect(() => {
  //   // Fetch colleges data from Sanity server
  //   sanityClient
  //     .fetch('*[_type == "college"]{...fields}')
  //     .then((data) => {
  //       setColleges(data);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch data:", error);
  //     });
  // }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <div className="leaderboard__container">
        {colleges.map((college) => (
          <Link to={`/college/${college._id}`} key={college._id}>
            <CollegeCard
              name={college.name}
              image={images.company6}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              rank={1}
              rating={4.5}
              key={college._id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
