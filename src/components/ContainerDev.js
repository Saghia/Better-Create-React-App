import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContainerDev = (props) => {
  return (
    <div className="App">
      <Container className="App-header">
        <Row>
          <Col>{props.Title}</Col>
        </Row>
        <Row>
          <Col>{props.ImgRotate}</Col>
        </Row>
        <Row>
          <Col>{props.PCode}</Col>
        </Row>
        <Row>
          <Col>{props.LinkGithubSaghia}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContainerDev;
