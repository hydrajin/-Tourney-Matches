import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from "./data/matchData";
import playerData from "./data/playerData";
// import DemoComponent from "./components/Demo";
import { preparePlayerData, addWinsToPlayers } from "./helpers/playerHelpers";

function App(props) {
  // const user = { age:20, name:"Sam"}
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  return (
    <div className="App">
        {/* <DemoComponent age = {20} name = {"Sam"} location = {"Vancouver"} />
        <DemoComponent age = {20} name = {"Sam"} location = {"Vancouver"} >TEST</DemoComponent> */}
      <h1>
        Tourney Matches <span>Where Coding and Tournaments found their Match!</span>
      </h1>
        <PlayerList parsedPlayerData = {parsedPlayerData} />
        <MatchList matchData = {matchData} />
      
        {/* <MatchList age = {user.age} name = {user.name} />
        <MatchList {...user} /> */}
    </div>
  );
}

export default App;