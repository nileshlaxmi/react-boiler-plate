import React from "react";
import { CONSTANTS } from "../../../constants";
import "./style.scss";

const RenderBtn = ({ onClick, label, type }) => {
  return (
      <button className={`button-box__button ${type}`} onClick={onClick}>
        {label ? label : CONSTANTS.submitBtn}
      </button>
  );
};

export default RenderBtn;
