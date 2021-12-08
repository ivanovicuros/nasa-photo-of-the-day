
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './Header';
import Section from './Section';
import axios from "axios";


function App() {
  const [content, setContent]  = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then( resp => {
      console.log(resp)
      setContent(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <img
            src={content.url}
            alt="NASA" />
      <div>
        <h2>{content.title}</h2>
        <h2>{content.date}</h2>
        </div>      
      
    </div>
  );
}

export default App;
