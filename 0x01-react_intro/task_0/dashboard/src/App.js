import React from 'react';
import './App.css';

function App() {
  return (
	  <div className="App">
		<header className="App-header">
        <img src={require('./Holberton_Logo.png')} alt="Holberton Logo" className="App-logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}
export default App;
