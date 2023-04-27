import React from 'react';
import '../App.css';

class ImgRotate extends React.Component {
    render(img) {
      return    <img src={this.props.img} className="App-logo" alt="logo" />;
    }
  }

export default ImgRotate;