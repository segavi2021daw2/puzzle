import  { useState, useEffect } from "react";
import Board from "./Board";
import { updateURLParameter } from "./helpers";
import React from 'react';

import {Timer} from "./timer";


export default function App() {
  const [imgUrl, setImgUrl] = useState("")

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"))
    }
  }, [])

  const handleImageChange = (e) => {
    setImgUrl(e.target.value)
    window.history.replaceState("", "", updateURLParameter(window.location.href, "img", e.target.value))
  }

  return (
    <div className="App">
    
    <h1 id="title">Puzzle Game!</h1>
    <Board imgUrl={imgUrl} />
    <input id="input"value={imgUrl} onChange={handleImageChange} />
<Timer></Timer>
  </div>



  );
}

