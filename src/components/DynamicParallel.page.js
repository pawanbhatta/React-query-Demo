import axios from "axios";
import React from "react";
import { useQueries } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes`);
};

const DynamicParallel = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ["super-hero", heroId],
        queryFn: () => fetchSuperHero(heroId),
      };
    })
  );

  console.log({ queryResults });
  return (
    <div>
      <h4>DynamicParallel</h4>
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
    </div>
  );
};

export default DynamicParallel;
