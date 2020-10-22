import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const App = () => {

  const [data, setData] = useState(null)
  const [number, setNumber] = useState(null)

  useEffect(() => {
    number !== null && axios.get(`http://localhost/api/items/${number}`)
    .then((res) => {
      console.log(res)
      setData(res.data)
    })
  }, [number])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <select value={number || ''} onChange={(e) => setNumber(e.target.value)}>
          <option value="1">1</option>
          <option value="13">13</option>
          <option value="24">24</option>
          <option value="50">50</option>
          <option value="89">89</option>
          <option value="102">102</option>
          <option value="117">117</option>
          <option value="138">138</option>
          <option value="180">180</option>
          <option value="235">235</option>
        </select>
        <p>From <code>/api</code> behind your reverse proxy server:</p>
        {data && (
          <p> Data from the server is: {data.item_id}</p>
        )}

      </header>
    </div>
  );
}

export default App;
