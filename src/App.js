import React, { Component } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Bio from "./components/Bio";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Bio />
        <Portfolio />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
