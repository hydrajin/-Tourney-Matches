import React from "react"; //optional
import Match from "./Match";

function MatchList(props) {
  //const oneMatch = props.matchData[0];
  const parsedMatches = props.matchData.map(match => <Match {...match} />)
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* <Match players={oneMatch.players} winner={oneMatch.winner} scoreDifference={oneMatch.scoreDifference} /> */}
      { parsedMatches }
    </section>
  );
}

export default MatchList;