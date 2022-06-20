import React from "react";
import { Link } from "react-router-dom"
import "./Start.css"
import start from "./bonk-start.svg"

const Start = () => {
    return(
        <div className="Start">
            <img src={start}/>
            <Link to="/game" className="btn-start" href>Start</Link>
        </div>
    )
}
export default Start