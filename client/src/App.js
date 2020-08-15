import React from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const handleClick = (e) => {
    e.preventDefault();
    Axios.get('/api/v1/pics')
    .then(res => console.log(res));
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={handleClick}>Get Data</button>
    </div>
  );
}

export default App;
