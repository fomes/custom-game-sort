import { useEffect, useState } from "react";
import { playerNames } from "./assets/playerNames";
import "./App.css";

function App() {
  const [playerArr, setPlayerArr] = useState([]);
  const indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    setPlayerArr(playerNames);
  }, []);

  const handleSort = () => {
    indexArr.sort(() => Math.random() - 0.5);
    const randomPlayers = [];

    for (let i in playerArr) {
      randomPlayers[i] = playerArr[indexArr[i]];
    }

    setPlayerArr(randomPlayers);
  };

  const handleRemovePlayer = (id) => {
    const playerNamesUpdate = playerArr.filter((item, index) => index !== id);
    setPlayerArr(playerNamesUpdate);
    setPlayerArr((prev) => [...prev, null]);
  };

  const handleAddPlayer = (name) => {
    setPlayerArr((prev) => [...prev, name]);
  };

  return (
    <div className="App">
      <h2>Custom Sort</h2>
      <div className="container">
        <div className="col">
          {playerArr.map(
            (item, index) =>
              index < 5 && (
                <p key={index}>
                  {item ? (
                    <>
                      {item}{" "}
                      <span onClick={() => handleRemovePlayer(index)}>❎</span>
                    </>
                  ) : (
                    <span onClick={() => handleAddPlayer("Novo")}>➕</span>
                  )}
                </p>
              )
          )}
        </div>
        <div className="col">
          {playerArr.map(
            (item, index) =>
              index > 4 && (
                <p key={index}>
                  {item ? (
                    <>
                      {item}{" "}
                      <span onClick={() => handleRemovePlayer(index)}>❎</span>
                    </>
                  ) : (
                    <span onClick={() => handleAddPlayer("Novo")}>➕</span>
                  )}
                </p>
              )
          )}
        </div>
      </div>

      <button onClick={handleSort}>SORTEAR</button>
      <button onClick={() => console.log(playerArr)}>CONSOLE</button>
    </div>
  );
}

export default App;
