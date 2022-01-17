import React from "react"; //optional
import matchData from "../data/matchData";
import playerData from "../data/playerData";
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";
// importing an object of functions (we can use object destructuring)
// import { nameOfProperty } from './someFile';
console.log("preparePlayerData", preparePlayerData);
console.log("addWinsToPlayers", addWinsToPlayers);

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;