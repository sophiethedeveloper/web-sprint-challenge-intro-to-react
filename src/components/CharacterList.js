import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const CharacterList = () => {
  const [charac, setCharac] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12"
      )
      .then((response) => {
        console.log("characters", response);
        setCharac(response.data);
      })
      .catch((error) => {
        console.log("Sorry no people", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="entry">
        {charac.map((item) => {
          return (
            <Character key={item.id} name={item.name} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default CharacterList;
