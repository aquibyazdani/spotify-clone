import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Fab from "@mui/material/Fab";
import { Row, Col } from "reactstrap";
import WidthWideOutlinedIcon from "@mui/icons-material/WidthWideOutlined";
import "./BottomPlayer.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayerDurationBar from "./PlayerDurationBar";
import MicIcon from "@mui/icons-material/Mic";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

//context
import { AppContext } from "../contexts/AppContext";
const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomPlayer() {
  const { progressSong, isPlaying, setIsPlaying, isOpenPlayer } =
    useContext(AppContext);
  console.log("isPlaying: ", isPlaying);
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: isOpenPlayer ? "0px" : "-150px",
          transition: "350ms",
          backgroundColor: "#181818",
          height: "90px",
          zIndex: "9999",
          paddingTop: "20px",
        }}
      >
        <Toolbar>
          <Row className="w-100">
            <Col md="3">
              <Row>
                <span className="bttm-player-img-container">
                  <img
                    className="bttm-player-img"
                    src={"/ea364e99656e46a096ea1df50f581efe.png"}
                    alt="icon"
                  />
                </span>
                <Col className="bottm-plyr-song-info-container">
                  <h5 className="bttm-player-title">Jo Tu Na Mila</h5>
                  <p className="bttm-player-author">Asim Azhar</p>
                </Col>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <FavoriteBorderIcon sx={{ width: "20px" }} />
                </span>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <WidthWideOutlinedIcon sx={{ width: "20px" }} />
                </span>
              </Row>
            </Col>

            <Col md="6" className=" btm-plyr-main-container">
              <Row style={{ height: "30px" }}>
                <Col className="bttm-plyr-icon-container">
                  <span className="bttm-player-icon-container pt-2 px-1">
                    <ShuffleOutlinedIcon sx={{ width: "25px" }} />
                  </span>
                </Col>
                <Col className="bttm-plyr-icon-container">
                  <span className="bttm-player-icon-container pt-2 px-1">
                    <SkipPreviousIcon sx={{ width: "25px" }} />
                  </span>
                </Col>
                <Col className="bttm-plyr-playicon-container">
                  <span className="bttm-player-play-container">
                    {isPlaying ? (
                      <PlayArrowRoundedIcon
                        onClick={() => setIsPlaying(false)}
                        sx={{ width: "25px" }}
                      />
                    ) : (
                      <PauseRoundedIcon
                        onClick={() => setIsPlaying(true)}
                        sx={{ width: "25px" }}
                      />
                    )}
                  </span>
                </Col>
                <Col className="bttm-plyr-icon-container">
                  <span className="bttm-player-icon-container pt-2 px-1">
                    <SkipNextIcon sx={{ width: "25px" }} />
                  </span>
                </Col>
                <Col className="bttm-plyr-icon-container">
                  <span className="bttm-player-icon-container pt-2 px-1">
                    <ShuffleOutlinedIcon sx={{ width: "25px" }} />
                  </span>
                </Col>
              </Row>
              <Row className="player-progress-container">
                <PlayerDurationBar variant="determinate" value={100} />
              </Row>
            </Col>

            <Col md="3" className="d-flex justify-content-end">
              <Row>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <MicIcon sx={{ width: "20px" }} />
                </span>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <HorizontalSplitIcon sx={{ width: "20px" }} />
                </span>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <ContactPhoneIcon sx={{ width: "20px" }} />
                </span>
                <span className="bttm-player-icon-container pt-2 px-1">
                  <VolumeUpIcon sx={{ width: "20px" }} />
                </span>
                <span className="sound-bar-container pl-0">
                  <span className="sound-bar"></span>
                </span>
              </Row>
            </Col>
          </Row>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
