import React, {Component} from 'react';
import FlashcardsApp from './components/FlashcardsApp'

import './App.css';
import './bootstrap.css';

class App extends Component{
  render () {
    return (
      <div className="App">
        <FlashcardsApp/>
      </div> 
    );
  }
}

export default App;
