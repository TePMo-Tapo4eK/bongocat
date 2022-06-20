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
  let [counter, setCounter] = useState(0);

  const act = () => {
    if (bonkVal !== bonkL) {
      setCounter(() => counter++);
      setVal(() => bonkL);
    }
    console.log(counter)
  };

  const act2 = () => {
    if (bonkVal !== bonkR) {
      setCounter(() => counter++);
      setVal(() => bonkR);
    }
    console.log(counter)
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
        <div onClick={() =>
          {if (bonkVal !== bonkL) {
            setCounter(() => counter++);
            setVal(() => bonkL);
          }
          }
        }></div>
        <div onClick={() =>
          {if (bonkVal !== bonkR) {
            setCounter(() => counter++);
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
