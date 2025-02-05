import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function AddComponent({ updtDataTodos }) {

    const [inputValue1, setInputValue] = useState("");
    const [inputValue2, setInput2Value] = useState("");

    function updtData(inputValue1, inputValue2) {
        const data = {id:uuidv4(), nom: inputValue1, desc: inputValue2, done: false}
        // updatingValue({ nom: inputValue1, desc: inputValue2 });
        updtDataTodos((prevTodos) => [...prevTodos, data]);
        console.log()


        setInput2Value("");
        setInputValue("");

    }


    return (
        <>
            <input type="text" value={inputValue1} onChange={(e) => setInputValue(e.target.value)} />

            <input type="text" value={inputValue2} onChange={(e) => setInput2Value(e.target.value)} />

            <button type="submit" onClick={() => updtData(inputValue1, inputValue2)}>Ajouter</button>
            </>
    )

}
