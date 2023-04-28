import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

const PCode = (props) => {
  return (
    <p>
      Edit <code>{props.CodeText}</code> and save to reload.
    </p>
  );
};

export default PCode;
