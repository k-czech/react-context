import React, { useState, createContext } from 'react';
import { players as playersData } from 'data/players';

export const PlayersContext = createContext({
  players: [],
});

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(playersData);

  return (
    <PlayersContext.Provider
      value={{
        players,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
};

export default PlayersProvider;
