import React from "react";
import Player from "./Player";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";


export default function PlayerList(props) {
// const {onePlayer} = props;
const {parsedPlayerData} = props;
const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} /> */}
      {parsedPlayers} 
    </section>
  );
}