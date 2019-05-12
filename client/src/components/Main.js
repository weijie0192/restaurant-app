import React, { Component } from 'react';
import { Header, Container, Navbar } from './Layout';
import { BrowserRouter as Router } from 'react-router-dom';
class Main extends Component {
  state = {
    navOpen: false
  };

  toggleDrawer = () =>
    this.setState(prev => ({
      navOpen: !prev.navOpen
    }));

  render() {
    return (
      <Router>
        <Header navOpen={this.state.navOpen} toggleDrawer={this.toggleDrawer} />
        <Navbar navOpen={this.state.navOpen} />
        <Container navOpen={this.state.navOpen} />
      </Router>
    );
  }
}

export default Main;
