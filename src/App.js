
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Title from './Title';
import Date from './date';
import Url from "./url";
import Explanation from "./explanation";



function App() {
  const [content, setContent]  = useState([])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=fk3viUpG23DbzjpMlP3PL1PrSjf97WPd4V14d4LP')
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

      
    </div>
  );
}

export default App;
