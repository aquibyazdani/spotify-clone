import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import "./BottomPlayer.css";

//context
import { AppContext } from "../contexts/AppContext";
export default function PlayerDurationBar() {
  //context
  const { progressSong, setProgressSong } = useContext(AppContext);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressSong((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        color={"inherit"}
        sx={{ borderRadius: "5px" }}
        variant="determinate"
        value={progressSong}
      />
    </Box>
  );
}
