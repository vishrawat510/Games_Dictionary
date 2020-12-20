import React, { useState } from "react";
import "./styles.css";

const gamesDictionary = {
  "🎾": "Badminton",
  "⚽": "Football",
  "🏀": "Basketball",
  "🏈": "Rugby",
  "⚾": "Baseball",
  "🥎": "Tennis",
  "🎱": "8 ball"
};

const games = Object.keys(gamesDictionary);

export default function App() {
  const [game, setGame] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputGame = event.target.value;
    setGame(inputGame);

    if (inputGame in gamesDictionary) {
      setMeaning(gamesDictionary[inputGame]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputGame) {
    setMeaning(gamesDictionary[inputGame]);
  }

  return (
    <div className="App">
      <h1>Games Dictionary</h1>
      <input
        onChange={changeHandler}
        value={game}
        placeholder={"Search your emoji"}
        style={{
          padding: "1rem",
          minWidth: "90%"
        }}
      />
      <h2> {meaning} </h2>
      {games.map((game) => (
        <span
          onClick={() => emojiClickHandler(game)}
          style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
        >
          {game}
        </span>
      ))}
    </div>
  );
}
