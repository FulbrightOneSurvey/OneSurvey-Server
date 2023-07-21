import React from "react";
import { LogIn } from "../../components/LogIn";
import { OldschoolButton } from "../../components/OldschoolButton";
import { TextBox } from "../../components/TextBox";
import "./style.css";

export const LandingPageLogin = () => {
  return (
    <div className="landing-page-login">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="form">
            <p className="welcome-to-fulbright">
              Welcome to Fulbright OneSurvey, a place for all things survey related
              <br />
              Please Log In or Sign Up to continue.
            </p>
            <div className="overlap-group">
              <img className="user-icon" alt="User icon" src="/img/user-icon.svg" />
              <div className="form-2" />
              <p className="p">Type in your user name or email address</p>
              <LogIn className="log-in-instance" text="Log in" />
              <OldschoolButton
                buttonClassName="design-component-instance-node"
                className="oldschool-button-instance"
                hover={false}
                signUpClassName="sign-up-2"
                text="Sign up"
              />
              <TextBox
                bottomLine="/img/bottom-line-1.svg"
                bottomLineClassName="text-box-4"
                className="text-box-instance"
                label="Username"
                leftBracket="/img/left-bracket-1.svg"
                leftBracketClassName="text-box-2"
                rightBracket="/img/right-bracket-1.svg"
                rightBracketClassName="text-box-3"
                topLine="/img/top-line-1.svg"
                topLineAutoLayoutClassName="text-box-5"
                topLineClassName="text-box-6"
              />
            </div>
          </div>
          <img className="fulbright" alt="Fulbright" src="/img/fulbright.png" />
          <img className="one-survey" alt="One survey" src="/img/onesurvey.png" />
        </div>
      </div>
    </div>
  );
};
