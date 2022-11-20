import React, { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import AppBar from "@mui/material/AppBar";
import "./MusicPlayer.css";
//context
import { AppContext } from "../contexts/AppContext";
function MusicPlayer() {
  //context
  const { isOpenPlayer, setIsOpenPlayer, setIsPlaying, isOpenMusic } =
    useContext(AppContext);
  const [currentSong, setCurrentSong] = useState(0);
  const handleNextSong = () => {
    setCurrentSong((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handlePrevSong = () => {
    setCurrentSong((currentTrack) =>
      currentTrack < playlist.length + 1 ? currentTrack - 1 : 0
    );
  };
  const handleEnd = () => {
    console.log("end");
    setCurrentSong((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  const playlist = [
    { src: "/kesariya.mp3" },
    { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3" },
    { src: "https://hanzluo.s3-us-west-1.amazonaws.com/music/suipian.mp3" },
  ];
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: isOpenMusic ? "10px" : "-150px",
          transition: "350ms",
          backgroundColor: "#181818",
          height: "90px",
          zIndex: "9999",
          paddingTop: "20px",
        }}
      >
        <AudioPlayer
          layout="stacked-reverse"
          autoPlay
          showSkipControls
          onClickNext={handleNextSong}
          onClickPrevious={handlePrevSong}
          src={playlist[currentSong].src}
          onPlay={(e) => console.log("playing")}
          onEnded={handleEnd}
        />
      </AppBar>
    </>
  );
}

export default MusicPlayer;
