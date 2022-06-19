import bonk from "./bonk.svg"
import bonkL from "./bonk-l.svg"
import bonkR from "./bonk-r.svg"
import bonkB from "./bonk-both.svg"
import './App.css';
import { useState } from "react";

function App() {
  const [bonkVal, setVal] = useState(bonk)

  const [bonkLeft, setBonkLeft] = useState(bonk)

  const act = () => {
    setBonkLeft(() => bonkL)
    setVal(()=> bonkLeft)
  }

   let audio = new Audio(); // Создаём новый элемент Audio
	 audio.src = '.././bonk1.mp3'; // Указываем путь к звуку "клика"


  const [bonkRight, setBonkRight] = useState(bonk)

  const act2 = () => {
    setBonkRight(() => bonkR)
    setVal(()=> bonkRight)
  }





  return (
    <div className="App">
      <div className="bg">
        <img src={bonkVal}/>
      </div>
      <div className="btns">
      <button onClick={act}>clc</button>
      <button onClick={act2}>clc</button>
      <audio><source type="audio/mpeg" src=".././bonk.mp3"></source></audio>
      </div>
    </div>
  );
}

export default App;
