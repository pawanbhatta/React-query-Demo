import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const SuperHeroesPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/superheroes");
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <h4>Loading.....</h4>;

  if (error) return <h4>Error : {error} </h4>;

  return (
    <div className="superHeroes">
      {/* <Navbar /> */}
      <h1>SuperHeroesPage</h1>
      <div>
        {data.map((d) => {
          return <h5 key={d.id}>{d.name}</h5>;
        })}
      </div>
    </div>
  );
};

export default SuperHeroesPage;
