/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TextBox = ({
  label = "Label",
  className,
  leftBracketClassName,
  leftBracket = "/img/left-bracket.svg",
  rightBracketClassName,
  rightBracket = "/img/right-bracket.svg",
  bottomLineClassName,
  bottomLine = "/img/bottom-line.svg",
  topLineAutoLayoutClassName,
  topLineClassName,
  topLine = "/img/top-line.svg",
}) => {
  return (
    <div className={`text-box ${className}`}>
      <img className={`left-bracket ${leftBracketClassName}`} alt="Left bracket" src={leftBracket} />
      <img className={`right-bracket ${rightBracketClassName}`} alt="Right bracket" src={rightBracket} />
      <img className={`bottom-line ${bottomLineClassName}`} alt="Bottom line" src={bottomLine} />
      <div className={`top-line-auto-layout ${topLineAutoLayoutClassName}`}>
        <div className="label">
          <div className="label-2">{label}</div>
        </div>
        <img className={`top-line ${topLineClassName}`} alt="Top line" src={topLine} />
      </div>
    </div>
  );
};

TextBox.propTypes = {
  label: PropTypes.string,
  leftBracket: PropTypes.string,
  rightBracket: PropTypes.string,
  bottomLine: PropTypes.string,
  topLine: PropTypes.string,
};
