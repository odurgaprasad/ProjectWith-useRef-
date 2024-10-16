import React, { useState, useRef } from "react";

export default function Player() {
  const playerDataRef = useRef();

  const [playerData, setPlayerData] = useState(null);
  function handleClickButton() {
    setPlayerData(playerDataRef.current.value);
    playerDataRef.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerData ?? "UnKnown Entry"}</h2>
      <p>
        <input ref={playerDataRef} type="text" />
        <button onClick={handleClickButton}>Set Name</button>
      </p>
    </section>
  );
}
