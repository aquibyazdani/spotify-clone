import React, { useState } from "react";
import { Row, Col, Card } from "reactstrap";
import "./searchhome.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
function SearchHome(props) {
  return (
    <>
      <div style={{ marginLeft: "260px" }}>
        <Row className="">
          {props?.browseGenre.map((item, i) => {
            return (
              <>
                <Col
                  md="1"
                  xl="1"
                  style={{
                    width: "207.75px",
                    height: " 207.75px",
                    paddingRight: "24px",
                  }}
                >
                  <Card
                    className="search-card-container"
                    style={{ backgroundColor: item.color }}
                  >
                    <Row>
                      <h6 className="search-card-name">{item?.label}</h6>
                      <Col className="text-center pt-3">
                        <div className="search-img-container">
                          <img
                            className="search-img"
                            src={item?.image}
                            alt="song-name"
                          />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default SearchHome;
