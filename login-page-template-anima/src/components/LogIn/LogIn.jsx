/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogIn = ({ text = "Log in", className }) => {
  return (
    <div className={`log-in ${className}`}>
      <div className="button">
        <div className="text-wrapper">{text}</div>
        <img className="arrow" alt="Arrow" src="/img/arrow-2.svg" />
      </div>
    </div>
  );
};

LogIn.propTypes = {
  text: PropTypes.string,
};
