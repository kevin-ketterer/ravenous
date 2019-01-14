import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  render() {
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList /> 
    </div>
    return;
  }
}

export default App;
