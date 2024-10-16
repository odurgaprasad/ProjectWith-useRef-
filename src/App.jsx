import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import TimerChallenges from "./components/TimerChallenges";

function App() {
  return (
    <div id="content">
      <Header />
      <Player />
      <div id="challenges">
        <TimerChallenges title="easy" target={1} />
        <TimerChallenges title="tough" target={5} />
        <TimerChallenges title="Getting a Tough" target={10} />
        <TimerChallenges title="Hard" target={15} />
      </div>
    </div>
  );
}

export default App;
