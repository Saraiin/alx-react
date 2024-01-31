import React from 'react';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <div className="App">
       <Notifications />
      <header className="App-header">
      <img src={require('./Holberton_Logo.jpg')} alt="Holberton Logo" className="App-logo" />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>

        <form>

          {/* Email */}
          <div>
            <label htmlFor="email">Email: </label>
              <input type="email" id="email" />            
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" />
          </div>

          {/* OK Button */}
          <button>OK</button>
        </form>
      </body>
      <footer className="App-footer">
        <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </footer>
    </div>
  );
}

export default App;