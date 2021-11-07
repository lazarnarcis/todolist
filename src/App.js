import React, { useState, useRef } from "react"
import ItemToDo from "./ItemToDo"
import "./style.scss"

export default function App() {
    const [items, setItems] = useState([])
    const [currentMap, setMap] = useState()
    const inputRef = useRef()
    const addElement = () => {
        if (inputRef.current.value === "") {
            alert("Please enter something...")
        } else {
            items.unshift(inputRef.current.value)
            setItems(items)
            console.log(items)
            inputRef.current.value = ""
            updateMap()
        }
    }
    const updateMap = () => {
        setMap(items.map((item, key) => <ItemToDo key={key} item={item} keyi={key} removeElement={() => removeElement(key)} />))
    }
    const removeElement = (key) => {
        delete items[key]
        updateMap()
    }
    const handleKey = (e) => {
        if (e.key === 'Enter') {
            addElement()
        }
    }
    const showElements = () => {
        alert(`You have created ${items.length} items in total. (deleted + done)`)
    }
    return (
        <>
            <h1>ToDo List</h1>
            <div className="elements">
                <input type="text" placeholder="Name here" ref={inputRef} id="elementName" onKeyDown={handleKey} autoFocus />
                <input type="button" value="Add Item" id="submit" onClick={addElement} />
            </div>
            <div id="showElements">
                <input type="button" value="Check Elements" id="show" onClick={showElements} />
            </div>
            <ul>
                {currentMap}
            </ul>
        </>
    )
}