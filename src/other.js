import React, { useState } from "react"

export default function App() {
    const [objects, setObjects] = useState([])
    const [currentMap, setCurrentMap] = useState()
    const setc = () => {
        setCurrentMap(objects.map((item) => {
            return <li key={item.id}>{item.text}</li>
        }))
    }
    return (
        <>
            <ul>
                {currentMap}
            </ul>
            <input type="button" onClick={() => {
                let newID = objects.length + 1
                const newObj = {
                    id: newID,
                    text: "Third element"
                }
                objects.unshift(newObj)
                setObjects(objects)
                console.log(objects)
                setc()
            }} value="Add Element" />
        </>
    )
}