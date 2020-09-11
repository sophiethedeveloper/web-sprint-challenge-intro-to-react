import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charac, setCharac] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className="container">
        <div className="entry">
          {charac.map((item) => {
            return (
              <Character
                key={item.id}
                name={item.name}
                image={item.image}
                species={item.species}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
