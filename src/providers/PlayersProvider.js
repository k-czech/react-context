import React, { useState, createContext } from 'react';
import { players as playersData } from 'data/players';

export const PlayersContext = createContext({
  players: [],
  handleDeletePlayers: () => {},
});

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(playersData);

  const handleDeletePlayers = (idx) => {
    const filteredPlayers = players.filter((val, id) => id !== idx);
    setPlayers(filteredPlayers);
  };

  return (
    <PlayersContext.Provider
      value={{
        players,
        handleDeletePlayers,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
