// src/components/CollegePage.js
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../sanityClient";

const College = () => {
  const { collegeId } = useParams();
  const [college, setCollege] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch college data from Sanity server
    sanityClient
      .fetch(`*[_type == "college" && _id == $collegeId][0]{...fields}`, {
        collegeId,
      })
      .then((data) => {
        setCollege(data);
      })
      .catch((error) => {
        console.error("Failed to fetch college data:", error);
      });

    // Fetch teams data for the college from Sanity server
    sanityClient
      .fetch('*[_type == "team" && college._ref == $collegeId]{...fields}', {
        collegeId,
      })
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => {
        console.error("Failed to fetch teams data:", error);
      });
  }, [collegeId]);

  if (!college) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{college.name}</h1>
      <p>{college.description}</p>

      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team._id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default College;
