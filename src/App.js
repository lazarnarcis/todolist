import React, { useState, useRef } from "react"
import ItemToDo from "./ItemToDo"
//import useLocalStorage from "./hooks/useLocalStorage"
import "./style.scss"

export default function App() {
    const [currentMap, setMap] = useState()
    const inputRef = useRef()
    const [items, setItems] = useState([])

    let initialItemID = items.length
    const addElement = () => {
        if (inputRef.current.value === "") {
            alert("Please enter something!!!")
        } else {
            const newObj = {
                id: initialItemID,
                text: inputRef.current.value
            }
            items.push(newObj)
            setItems(items)
            console.log(items)
            inputRef.current.value = ""
            updateMap()
        }
    }
    const updateMap = () => {
        setMap(items.map((item) => <ItemToDo key={item.id} item={item.text} keyi={item.id} removeElement={() => removeElement(item.id)} />))
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
        <section className="bck">
            <div className="App">
                <div className="Apps">
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
                </div>
            </div>
        </section>
    )
}