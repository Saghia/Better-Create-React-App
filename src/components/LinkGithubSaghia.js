import React from "react";
import "../App.css";

class LinkGithubSaghia extends React.Component {
  render(TextLink) {
    return (
      <a href={this.props.TextLink} className="App-link">
        {this.props.TextLink}
      </a>
    );
  }
}

export default LinkGithubSaghia;
