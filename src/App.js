import bonk from "./bonk.svg";
import bonkL from "./bonk-l.svg";
import bonkR from "./bonk-r.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [bonkVal, setVal] = useState(bonk);
  const [tutor, setTutor] = useState(true)

  let [counter, setCounter] = useState(0);

  const act = () => {
    if (bonkVal !== bonkL) {
      setCounter(() => counter++);
      setVal(() => bonkL);
    }
  };

  const act2 = () => {
    if (bonkVal !== bonkR) {
      setCounter(() => counter++);
      setVal(() => bonkR);
    }
  };

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
        <div onClick={act}></div>
        <div onClick={act2}></div>
      </div>
      <div className="counter">{counter}</div>
    </div>
    
    <div className={`intro ${tutor ? "" : "active" }`} onClick={shadow}>
      <div className={`intro__left ${tutor ? "" : "active" }`}>
        <p>Жмякай сюда<br/> для левой лапки</p>
      </div>
      <div className={`intro__right ${tutor ? "" : "active" }`}>
        <p>Жмякай сюда<br/> для правой лапки</p>
      </div>
    </div>
    
    </>
  );
}

export default App;
