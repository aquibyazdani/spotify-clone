import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();
const AppContextProvider = (props) => {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false);
  const [progressSong, setProgressSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isOpenPlayer,
        setIsOpenPlayer,
        progressSong,
        setProgressSong,
        isPlaying,
        setIsPlaying,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
