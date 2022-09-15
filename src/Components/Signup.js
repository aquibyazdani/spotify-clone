import React, { useState } from "react";
import { Row, Col, Button, Input } from "reactstrap";
import "./signup.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ReCAPTCHA from "react-google-recaptcha";

function SignUp() {
  const [verifiedCaptcha, setVerifiedCaptcha] = useState(false);

  const captchaHandler = () => {
    return setVerifiedCaptcha(true);
  };
  return (
    <>
      <Row className="mt-5 justify-content-center">
        <Col
          sm="6"
          md="6"
          lg="6"
          style={{ maxWidth: "450px", paddingBottom: "130px" }}
        >
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
          <Row className="justify-content-center pt-3">
            <Col className="p-0  d-flex-col justify-content-center px-4 ">
              <p className="signup-form-label">What's your email?</p>
              <Input
                className="signup-text-field"
                type="text"
                placeholder="Enter your email."
              />
            </Col>
          </Row>
          <Row className="justify-content-center pt-3">
            <Col className="p-0  d-flex-col justify-content-center px-4 ">
              <p className="signup-form-label">Confirm your email?</p>
              <Input
                className="signup-text-field"
                type="text"
                placeholder="Enter your email again."
              />
            </Col>
          </Row>
          <Row className="justify-content-center pt-3">
            <Col className="p-0  d-flex-col justify-content-center px-4 ">
              <p className="signup-form-label">Create password</p>
              <Input
                className="signup-text-field"
                type="password"
                placeholder="Create password."
              />
            </Col>
          </Row>
          <Row className="justify-content-center pt-3">
            <Col className="p-0  d-flex-col justify-content-center px-4 ">
              <p className="signup-form-label">What should we call you??</p>
              <Input
                className="signup-text-field"
                type="text"
                placeholder="Enter your profile name."
              />
            </Col>
          </Row>
          <Row
            className="justify-content-center pt-3"
            style={{
              margin: "0 28px 0 10px",
            }}
          >
            <Col className="px-0  d-flex-col justify-content-center">
              <p className="m-0 calen-signup-form">Year</p>
              <Input
                className="signup-text-field"
                type="year"
                placeholder="Enter your profile name."
              />
            </Col>
            <Col className="pr-2  d-flex-col justify-content-center  ">
              <p className="m-0 calen-signup-form">Month</p>
              <Input
                className="signup-text-field"
                type="month"
                placeholder="Enter your profile name."
              />
            </Col>{" "}
            <Col className="px-0 d-flex-col justify-content-center  ">
              <p className="m-0 calen-signup-form">Day</p>
              <Input
                className="signup-text-field"
                type="text"
                placeholder="Enter your profile name."
              />
            </Col>
          </Row>
          <Row className="pt-3 justify-content-center">
            <Col className="p-0 radio-signup">
              <Row style={{ maxWidth: "-webkit-fill-available" }}>
                <FormControlLabel control={<Checkbox />} label="Male" />
              </Row>
            </Col>
            <Col className="p-0 radio-signup" style={{ maxWidth: "135px" }}>
              <Row style={{ maxWidth: "-webkit-fill-available" }}>
                <FormControlLabel control={<Checkbox />} label="Female" />
              </Row>
            </Col>{" "}
            <Col className="p-0 radio-signup" style={{ maxWidth: "140px" }}>
              <Row style={{ maxWidth: "-webkit-fill-available" }}>
                <FormControlLabel control={<Checkbox />} label="Non-binary" />
              </Row>
            </Col>{" "}
            <Col className="p-0 radio-signup">
              <Row style={{ maxWidth: "-webkit-fill-available" }}>
                <FormControlLabel
                  sx={{ fontSize: "10px" }}
                  control={<Checkbox />}
                  label="Other"
                />
              </Row>
            </Col>{" "}
          </Row>
          <Row style={{ flexWrap: "nowrap" }}>
            <Checkbox sx={{ maxWidth: "fit-content", margin: "0px" }} />
            <p style={{ fontSize: "14px" }}>
              I would prefer not to receive marketing messages from Spotify
            </p>
          </Row>
          <Row className="" style={{ flexWrap: "nowrap" }}>
            <Checkbox sx={{ maxWidth: "fit-content", margin: "0px" }} />
            <p style={{ fontSize: "14px" }}>
              Share my registration data with Spotify's content providers for
              marketing purposes.
            </p>
          </Row>
          <Row className="my-3 mx-0">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // for testing only
              onChange={() => {
                captchaHandler();
              }}
            />
          </Row>
          <Col className="terms-cond-signup">
            <p>
              By clicking on sign-up, you agree to Spotify's{" "}
              <span className="link-signup">Terms and Conditions of Use.</span>
            </p>
            <p>
              To learn more about how Spotify collects, uses, shares and
              protects your personal data, please see{" "}
              <span className="link-signup"> Spotify's Privacy Policy.</span>
            </p>
          </Col>

          <Row className="justify-content-center">
            <Button className="btn-signup-signup">Sign up</Button>
          </Row>
          <Col className=" text-center">
            <p>
              Have an account?{" "}
              <span style={{ fontSize: "inherit" }} className="link-signup">
                {" "}
                Log in.
              </span>
            </p>
          </Col>
        </Col>
      </Row>
    </>
  );
}

export default SignUp;
