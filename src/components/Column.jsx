import React from "react";

export default function Column({
  playerArr,
  indexEnd,
  newPlayer,
  indexStart,
  setNewPlayer,
  handleAddPlayer,
  handleRemovePlayer,
  setPlayerToReplace,
}) {
  return (
    <div className="col">
      {playerArr.map(
        (item, index) =>
          index > indexStart &&
          index < indexEnd && (
            <div key={index} className="player-div">
              {item.name !== "" ? (
                <div className="player-span">
                  <span
                    className="pointer"
                    onClick={() => setPlayerToReplace(index)}
                  >
                    🔃
                  </span>
                  <span className={item.class}>{item.name}</span>
                  <span
                    className="pointer"
                    onClick={() => handleRemovePlayer(item.id)}
                  >
                    ❎
                  </span>
                </div>
              ) : (
                <>
                  <span>
                    <input
                      type={"text"}
                      maxLength={"10"}
                      placeholder={"Digite um nome"}
                      onChange={(e) => setNewPlayer(e.target.value)}
                    />
                  </span>
                  <span
                    className="pointer"
                    onClick={() => handleAddPlayer(item.id, newPlayer)}
                  >
                    ➕
                  </span>
                </>
              )}
            </div>
          )
      )}
    </div>
  );
}
