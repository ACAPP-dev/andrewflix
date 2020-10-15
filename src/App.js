import React from 'react';
import './App.css';
import './containers/NavBarContainer';
import NavBarContainer from './containers/NavBarContainer';
import CardsContainer from './containers/CardsContainer';

function App() {
  return (
    <div className="App">
      <div>
        < NavBarContainer / >
      </div>

      <div>
        < CardsContainer />
      </div>
    </div>
  );
}

export default App;
