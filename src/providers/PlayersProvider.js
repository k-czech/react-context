import React, { useState, createContext } from 'react';
import { players as playersData } from 'data/players';

export const PlayersContext = createContext({
  players: [],
  handleAddPlayer: () => {},
  deletePlayers: () => {},
});

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(playersData);

  const handleAddPlayer = (value) => {
    const newPlayer = {
      name: value.name,
      age: value.age,
      born: value.born,
      country: value.country,
      position: value.position,
      team: value.team,
      amount: value.amount,
    };
    setPlayers([newPlayer, ...players]);
  };

  const deletePlayers = (idx) => {
    const filteredPlayers = players.filter((val, id) => id !== idx);
    setPlayers(filteredPlayers);
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        handleAddPlayer,
        deletePlayers,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
