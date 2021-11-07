import React, { useState } from "react"

export default function ItemToDo({keyi, item, removeElement}) {
    const [display, setDisplay] = useState(true)
    const changeElement = () => {
        document.getElementById(`stop${keyi}`).style = "display: inline"
        document.querySelector(`.liElement${keyi}`).style.transform = "scaleX(0)"
        document.querySelector(`.liElement${keyi}`).style.transition = "transform .5s"
        setTimeout(() => {
            document.querySelector(`.liElement${keyi}`).style.transform = "scaleX(1)"
            setDisplay(false)
        }, 500)
    }
    let priorityID = keyi + 1
    return (
        <div id="liElement" className={`liElement${keyi}`}>
            <span id="itemID">{priorityID}</span>
            <li style={{backgroundColor: display ? "lightgreen" : "red"}}>
                <div id="elements">
                    <span id={`stop${keyi}`} style={{display: "none"}}>&#9989;</span>
                    <span id="text">{item}</span>
                </div>
                <div id="elements" style={{display: display ? "inline" : "none"}}>
                    <input type="button" value="Delete" id="itemButton" onClick={removeElement} />
                    <input type="button" value="Done" id="itemButton" onClick={() => changeElement()} />
                </div>
            </li>
        </div>
    )
}