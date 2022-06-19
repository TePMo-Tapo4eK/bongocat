import bonk from "./bonk.svg"
import bonkL from "./bonk-l.svg"
import bonkR from "./bonk-r.svg"
import bonkB from "./bonk-both.svg"
import './App.css';
import { useState } from "react";

function App() {
  const [bonkVal, setVal] = useState(bonk)
  let [count, setCount] = useState(0)

  const [bonkLeft, setBonkLeft] = useState(bonk)

  const act = () => {

    if (bonkVal !== bonkL) {
      setCount(() => count++)
      setVal(()=> bonkL)
    }
  }

  const [bonkRight, setBonkRight] = useState(bonk)

  const act2 = () => {

    if (bonkVal !== bonkR) {
      setCount(() => count++)
      setVal(()=> bonkR)
    }
  }





  return (
    <div className="App">
      <div className="bg">
        <img src={bonkVal}/>
      </div>
      <div className="btns">
      <div onClick={act}></div>
      <div onClick={act2}></div>
      <audio><source type="audio/mpeg" src=".././bonk.mp3"></source></audio>
      </div>
      <div className="counter">
        {count}
      </div>
    </div>
  );
}

export default App;
