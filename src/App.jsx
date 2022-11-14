import { useEffect, useState } from "react";
import { playerNames } from "./data/playerNames";
import Column from "./components/Column";

function App() {
  const [playerArr, setPlayerArr] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [loading, setLoading] = useState(false);
  const [playerChange, setPlayerChange] = useState(false);
  const [index, setIndex] = useState([]); // index to replace

  const indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setPlayerArr(playerNames);
  }, []);

  useEffect(() => {
    if (index.length == 2) {
      handleReplacePlayer(index[0], index[1]);
      setIndex([]);
    }
  });

  const handleSort = (e) => {
    e.target.blur();
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

  const handleSetPlayerToReplace = (index) => {
    setIndex((prev) => [...prev, index]);
  };

  const handleReplacePlayer = (index1, index2) => {
    const arr = playerArr;
    let name1 = arr[index1].name;
    let name2 = arr[index2].name;

    arr[index1].name = name2;
    arr[index2].name = name1;

    setPlayerArr(arr);
  };

  return (
    <div className="App">
      <h2>Custom Sort 2022</h2>
      <div className="container">
        {!loading ? (
          <>
            <Column
              indexEnd={5}
              indexStart={-1}
              playerArr={playerArr}
              newPlayer={newPlayer}
              setNewPlayer={setNewPlayer}
              handleAddPlayer={handleAddPlayer}
              handleRemovePlayer={handleRemovePlayer}
              setPlayerToReplace={handleSetPlayerToReplace}
            />

            <Column
              indexEnd={10}
              indexStart={4}
              playerArr={playerArr}
              newPlayer={newPlayer}
              setNewPlayer={setNewPlayer}
              handleAddPlayer={handleAddPlayer}
              handleRemovePlayer={handleRemovePlayer}
              setPlayerToReplace={handleSetPlayerToReplace}
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
