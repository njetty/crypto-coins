import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Today from './Today/Today'


class App extends Component {
  render() {
    return (
      <div className="">
              <div className="topheader">
                  <header className="container">
                      <nav className="navbar">
                          <div className="navbar-brand">
                              <span className="navbar-item">Crypto Coins</span>
                          </div>
                          <div className="navbar-end">
                              <a className="navbar-item" href="https://naveenjetty.com" target="_blank" rel="noopener noreferrer">naveenjetty.com</a>
                          </div>
                      </nav>
                  </header>
              </div>
              <section className="results--section">
                  <div className="container">
                      <h1>Crypto Coins is a realtime price information about<br></br> BTC, ETH and LTC.</h1>
                  </div>
                  <div className="results--section__inner">
                      <Today />
                  </div>
              </section>
          </div>
    );
  }
}

export default App;
