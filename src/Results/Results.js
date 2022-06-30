import React from "react";
import "./Results.css"

const Results = (props) => {
    let k = props.list.filter((item,index) => index<5)
    return(
        <div className="results">
            Last 5 results
            {k.map(el => <p className="result">{el} жмяк(-ов)</p>)}
        </div>
    )
}
export default Results