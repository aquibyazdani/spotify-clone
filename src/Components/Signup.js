import React from "react";
import { Row, Col, Button } from "reactstrap";
import "./signup.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
function SignUp() {
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <Col sm="6" md="6" lg="6" style={{ maxWidth: "450px" }}>
          <Row className="justify-content-center">
            <img className="signup-logo" src="/Spotify_Logo_CMYK_Black.png" />
          </Row>
          <Row>
            <h6 className="signup-heading">
              Sign up for free to start listening.
            </h6>
          </Row>
          <Row className="justify-content-center">
            <Button className="btn-signup-fb">
              <FacebookRoundedIcon /> Sign up with Facebook
            </Button>
          </Row>
          <Row className="justify-content-center">
            <Button className="btn-signup-google">
              <GoogleIcon /> Sign up with Facebook
            </Button>
          </Row>
          <Row className="mx-3">
            <Divider>or</Divider>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default SignUp;
