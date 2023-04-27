import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class ContainerDev extends React.Component {
  render(Title, ImgRotate, PCode, LinkGithubSaghia) {
    return (
      <div className="App">
        <Container className="App-header">
          <Row>
            <Col>{this.props.Title}</Col>
          </Row>
          <Row>
            <Col>{this.props.ImgRotate}</Col>
          </Row>
          <Row>
            <Col>{this.props.PCode}</Col>
          </Row>
          <Row>
            <Col>{this.props.LinkGithubSaghia}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ContainerDev;
