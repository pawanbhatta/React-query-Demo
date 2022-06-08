import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueries = () => {
  const { data: superHeroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);
  return (
    <div>
      <h4>ParallelQueries</h4>
      <div className="superHeroes">
        {/* <Navbar /> */}
        <h1>Super Hero List</h1>
        <div>
          {superHeroes?.data.map((d) => {
            return (
              <Link to={`${d.id}`} key={d.id}>
                <h5>{d.name}</h5>
              </Link>
            );
          })}
        </div>
      </div>
      <h5 style={{ textAlign: "center", color: "red" }}>
        Fetched in parallel with
      </h5>
      <div className="superHeroes">
        {/* <Navbar /> */}
        <h1>Friends List</h1>
        <div>
          {friends?.data.map((d) => {
            return (
              <Link to={`${d.id}`} key={d.id}>
                <h5>{d.name}</h5>
              </Link>
            );
          })}
        </div>
      </div>

      <hr />
      <Outlet />

      <ToastContainer />
    </div>
  );
};

export default ParallelQueries;
