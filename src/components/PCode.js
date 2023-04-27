import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";

class PCode extends React.Component {
  render(CodeText) {
    return (
      <p>
        Edit <code>{this.props.CodeText}</code> and save to reload.
      </p>
    );
  }
}

export default PCode;
