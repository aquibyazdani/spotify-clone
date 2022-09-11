import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Row, Col, Card } from "reactstrap";
import "./genre.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function Genre(props) {
  const [isHovering, setIsHovering] = useState(false);
  const [targetElement, setTargetElement] = useState("");

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Grid container spacing={2} className="grenre-info-container">
        <Grid item xs={6} className="genre-container-heading">
          <h3 className="genre-name">{props?.genreName}</h3>
        </Grid>
        <Grid item xs={6} className="genre-grid-see-m genre-container-heading">
          <h3 className="genre-see-more">See All</h3>
        </Grid>
      </Grid>
      <Row
        style={{
          maxWidth: window.innerWidth - 260,
          overflowY: "hidden",
          overflowX: "scroll",
          flexWrap: "nowrap",
        }}
        className="grenre-container"
      >
        {props?.songsList &&
          props?.songsList.map((item, i) => {
            return (
              <Col
                key={item.label}
                className="song-detail-container"
                id={item.label}
                onMouseOver={(e) => {
                  setTargetElement(e.target.outerText);
                  handleMouseOver();
                }}
                onMouseLeave={handleMouseOut}
              >
                <Card className="song-card-container">
                  <Row>
                    <Col className="text-center pt-3">
                      <div>
                        <img
                          className="song-img"
                          src={item?.image}
                          alt="song-name"
                        />
                        <span
                          className={
                            isHovering && item?.label === targetElement
                              ? "play-icon-container"
                              : ""
                          }
                        >
                          {isHovering && item?.label === targetElement && (
                            <Col className={"play-icon-box-container"}>
                              <PlayArrowIcon />
                            </Col>
                          )}
                        </span>
                      </div>
                      <div className="song-info-container">
                        <h6 className="song-name-heading">{item?.label}</h6>
                        <p className="song-description">{item?.description}</p>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
}

export default Genre;
