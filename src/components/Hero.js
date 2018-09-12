import React, { Component } from "react";
import salmon from "../assets/salmon.jpg";

class Hero extends Component {
  state = {
    menuToggle: false
  };

  toggleMenu = () => {
    this.setState({
      menuToggle: !this.state.menuToggle
    });
    console.log("toggled");
  };

  render() {
    return (
      <div className="hero">
        <div className="hero-stripe">
          <div className="hero-title">LUCAS ECKMAN</div>
          <div className="hero-links">
            <div className="hero-link">
              <a href="https://github.com/eckmLJE">GITHUB</a>
            </div>
            <div className="hero-link">
              <a href="https://www.linkedin.com/in/lucas-eckman-1a707717/">
                LINKEDIN
              </a>
            </div>
            <div className="hero-link">
              <a href="mailto:hello@lucaseckman.com">CONTACT</a>
            </div>
          </div>
        </div>
        <img src={salmon} alt="Hero" />
      </div>
    );
  }
}

export default Hero;
