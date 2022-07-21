import React from "react";

export default function Column({
  playerArr,
  handleAddPlayer,
  handleRemovePlayer,
  newPlayer,
  setNewPlayer,
  indexStart,
  indexEnd,
}) {
  return (
    <div className="col">
      {playerArr.map(
        (item, index) =>
          index > indexStart &&
          index < indexEnd && (
            <p key={index}>
              {item.name !== "" ? (
                <>
                  {item.name}{" "}
                  <span onClick={() => handleRemovePlayer(item.id)}>❎</span>
                </>
              ) : (
                <>
                  <span>
                    <input
                      type={"text"}
                      placeholder={"Digite um nome"}
                      onChange={(e) => setNewPlayer(e.target.value)}
                    />
                  </span>
                  <span onClick={() => handleAddPlayer(item.id, newPlayer)}>
                    ➕
                  </span>
                </>
              )}
            </p>
          )
      )}
    </div>
  );
}
