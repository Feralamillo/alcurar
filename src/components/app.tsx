import React from 'react';

import carrot from '../img/carrot.png';

import './app.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="cover">
        <div className="content-wrapper">
          <h1>Alcurar</h1>
          <img src={carrot} className="carrot" alt="carrot" />
          <p>We are working on it</p>
          <p className="subtext">(Inshallah you'll be able to enjoy our magic soon)</p>
        </div>
      </div>
    </div>
  );
};

export default App;
