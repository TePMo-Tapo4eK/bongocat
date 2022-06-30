import bonk from "./bonk.svg";
import bonkL from "./bonk-l.svg";
import bonkR from "./bonk-r.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Counter from "./Counter";
import Results from "./Results/Results";

function App() {
  const [bonkVal, setVal] = useState(bonk);
  const [tutor, setTutor] = useState(true);
  const [counter, setCounter] = useState(0);
  const [lists, setLists] = useState([])

  const shadow = () => {
    setTutor(() => false)
  }



  // useEffect(() => {
  //   document.addEventListener('keypress', e => {
  //     if (e.key === "f"){
  //       if (bonkVal !== bonkL) {
  //         setCounter(counter+1);
  //         setVal(() => bonkL);
  //       }
  //     }
  //     if (e.key === "j"){
  //       if (bonkVal !== bonkR) {
  //         setCounter(counter+1);
  //         setVal(() => bonkR);
  //       }
  //     }
  //   }
    
  //   )
  //  return () => document.addEventListener('keypress',  e => {
  //   if (e.key === "f"){
  //     if (bonkVal !== bonkL) {
  //       setCounter(counter+1);
  //       setVal(() => bonkL);
  //     }
  //   }
  //   else if (e.key === "j"){
  //     if (bonkVal !== bonkR) {
  //       setCounter(counter+1);
  //       setVal(() => bonkR);
  //     }
  //   }
  //  })
  //  },[])


    const addList = () => {
      setLists([counter, ...lists])
      setCounter(0)
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
    
    <Results list={lists}/>
    <button className="results__btn" onClick={addList}>Send</button>
    </>
  );
}

export default App;
