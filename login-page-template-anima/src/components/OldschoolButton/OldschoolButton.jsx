/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const OldschoolButton = ({ text = "Sign up", hover, className, buttonClassName, signUpClassName }) => {
  return (
    <div className={`oldschool-button hover-${hover} ${className}`}>
      <div className={`div ${buttonClassName}`}>
        <div className={`sign-up ${signUpClassName}`}>{text}</div>
        <img className="img" alt="Arrow" src={hover ? "/img/arrow-1.svg" : "/img/arrow.svg"} />
      </div>
    </div>
  );
};

OldschoolButton.propTypes = {
  text: PropTypes.string,
  hover: PropTypes.bool,
};
