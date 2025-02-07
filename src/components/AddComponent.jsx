import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function AddComponent({ updtDataTodos }) {
  const [inputValue1, setInputValue] = useState("");
  const [inputValue2, setInput2Value] = useState("");

  function updtData(inputValue1, inputValue2) {
    const data = {
      id: uuidv4(),
      nom: inputValue1,
      desc: inputValue2,
      done: false,
    };
    // updatingValue({ nom: inputValue1, desc: inputValue2 });
    updtDataTodos((prevTodos) => [...prevTodos, data]);
    console.log();

    setInput2Value("");
    setInputValue("");
  }

  return (
    <>
      <div className="flex  flex-col bg-gray-100 p-4 rounded-lg w-100 h-100 items-center justify-center gap-3 border-l-4 border-r-4 border-blue-500 shadow-lg stickey mt-5">
        <h1 className="text-blue-500  text-center font-bold text-2xl  mt-0">
          Ajouter une tâche
        </h1>
        <div className="flex flex-col gap-2">
          <label for="nom" className="text-black font-thin text-xl">
            Nom
          </label>
          <input
            className="border-2 border-blue-500 p-2 rounded-lg w-80 focus:outline-none focus:border-red-500" 
            type="text"
            id="nom"
            value={inputValue1}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label for="desc" className="text-black font-thin text-xl">
            Description
          </label>
          <textarea
            id="desc"
            className="border-2 border-blue-500 p-2 rounded-lg  w-80 focus:outline-none focus:border-red-500 mb-8"
            type="text"
            value={inputValue2}
            onChange={(e) => setInput2Value(e.target.value)}
          >
            {" "}
          </textarea>
        </div>

        <div>
          {" "}
          <button
            type="submit"
            className="bg-red-400 text-white p-2 rounded-sm font-bold text-xl w-50"
            onClick={() => updtData(inputValue1, inputValue2)}
          >
            Enregistrer
          </button>
        </div>
      </div>
    </>
  );
}
