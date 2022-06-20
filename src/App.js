import bonk from "./bonk.svg";
import bonkL from "./bonk-l.svg";
import bonkR from "./bonk-r.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [bonkVal, setVal] = useState(bonk);
  const [tutor, setTutor] = useState(true);
  const [counter, setCounter] = useState(0);


  const shadow = () => {
    setTutor(() => false)
  }

  return (
    <>

    <div className="App">
      <div className="bg">
        <img src={bonkVal} />
      </div>
      <div className="btns">
        <div onClick={() =>
          {if (bonkVal !== bonkL) {
            setCounter(counter+1);
            setVal(() => bonkL);
          }
          }
        }></div>
        <div onClick={() =>
          {if (bonkVal !== bonkR) {
            setCounter(counter+1);
            setVal(() => bonkR);
          }
          }}></div>
      </div>
      <div className="counter"><Counter counter={counter}/></div>
    </div>
    
    <div className={`intro ${tutor ? "" : "active" }`} onClick={shadow}>
      <div className={`intro__left ${tutor ? "" : "active" }`}>
        <p>Жмяк<br/>левой лапкой</p>
      </div>
      <div className={`intro__right ${tutor ? "" : "active" }`}>
        <p>Жмяк<br/> правой лапкой</p>
      </div>
    </div>
    
    </>
  );
}

export default App;
