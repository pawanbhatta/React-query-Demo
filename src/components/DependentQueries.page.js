import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchProjectsOfUser = (skill) => {
  return axios.get(`http://localhost:4000/skills/${skill}`);
};

const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["user", email], () =>
    fetchUserByEmail(email)
  );
  const skill = user?.data.skill;

  const { data: projects } = useQuery(
    ["projects", skill],
    () => fetchProjectsOfUser(skill),
    { enabled: !!skill }
  );

  return (
    <div>
      <h4>DependentQueries Example</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "blue", fontWeight: "bolder" }}> CLICK </span> on
        the react query
        <span style={{ color: "purple", fontWeight: "bolder" }}>
          {" "}
          DEVTOOLS{" "}
        </span>
        at the bottom right for{" "}
        <span style={{ color: "brown", fontWeight: "bolder" }}>RESULTS</span>
      </div>

      <div className="projects">
        {projects?.data.projects.map((p) => {
          return <h3>{p}</h3>;
        })}
      </div>
    </div>
  );
};

export default DependentQueries;
