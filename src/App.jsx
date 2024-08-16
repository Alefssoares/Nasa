// src/App.jsx
import React from 'react';
import NasaImage from './NasaImage.jsx'; // Certifique-se de usar a extensão .jsx
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NASA Picture of the Day</h1>
        <NasaImage />
      </header>
    </div>
  );
}

export default App;



