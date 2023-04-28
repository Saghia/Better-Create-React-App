import React from "react";
import "../App.css";

const LinkGithubSaghia = (props) => {
  return (
    <a href={props.TextLink} className="App-link">
      {props.TextLink}
    </a>
  );
};

export default LinkGithubSaghia;
