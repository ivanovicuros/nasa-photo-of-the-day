
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Title from './Title';
import Date from './date';
import Url from "./url";
import Explanation from "./explanation";


function App() {
  const [content, setContent]  = useState({})

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

      <Title  con={content} /> 
      <Url  con={content} />  
      <Date con={content}  /> 
      <Explanation con={content}  /> 



{/* 
      <img
            src={content.url}
            alt="NASA" />
      <div>
        <h2>{content.title}</h2>
        <h2>{content.date}</h2>
        </div>       */}
      
    </div>
  );
}

export default App;
