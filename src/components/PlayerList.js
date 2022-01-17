import React from "react"; //optional
import matchData from "../data/matchData";
import playerData from "../data/playerData";
import Player from "./Player";

function PlayerList(props) {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;