import { useEffect, useState } from "react";
import { playerNames } from "./data/playerNames";
import "./App.css";
import Column from "./components/Column";

function App() {
  const [playerArr, setPlayerArr] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [loading, setLoading] = useState(false);
  const [playerChange, setPlayerChange] = useState(false);
  const indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setPlayerArr(playerNames);
  }, []);

  const handleSort = () => {
    setLoading(true);
    indexArr.sort(() => Math.random() - 0.5);
    const randomPlayers = [];

    for (let i in playerArr) {
      randomPlayers[i] = playerArr[indexArr[i]];
    }

    setPlayerArr(randomPlayers);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const handleRemovePlayer = (id) => {
    if (!playerChange) {
      const playerNamesUpdate = playerArr.filter((item) => item.id !== id);
      setPlayerArr(playerNamesUpdate);

      setPlayerArr((prev) => [...prev, { id, name: "" }]);
      setPlayerChange(true);
    }
  };

  const handleAddPlayer = (id, name) => {
    const playerNamesUpdate = playerArr.filter((item) => item.id !== id);
    setPlayerArr(playerNamesUpdate);

    setPlayerArr((prev) => [...prev, { id, name }]);
    setNewPlayer("");
    setPlayerChange(false);
  };

  const handleReplacePlayer = (id1, id2) => {};

  return (
    <div className="App">
      <h2>Custom Sort</h2>
      <div className="container">
        {!loading ? (
          <>
            <Column
              playerArr={playerArr}
              newPlayer={newPlayer}
              setNewPlayer={setNewPlayer}
              handleAddPlayer={handleAddPlayer}
              handleRemovePlayer={handleRemovePlayer}
              indexStart={-1}
              indexEnd={5}
            />

            <Column
              playerArr={playerArr}
              newPlayer={newPlayer}
              setNewPlayer={setNewPlayer}
              handleAddPlayer={handleAddPlayer}
              handleRemovePlayer={handleRemovePlayer}
              indexStart={4}
              indexEnd={10}
            />
          </>
        ) : (
          <>
            <div className="loader-container">
              <div className="loader"></div>
            </div>
          </>
        )}
      </div>

      <button onClick={handleSort}>SORTEAR</button>
    </div>
  );
}

export default App;
