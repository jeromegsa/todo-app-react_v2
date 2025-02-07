import { useState } from "react";
import AddComponent from "../components/AddComponent.jsx";
import ListComponent from "../components/ListComponent.jsx";

export default function MainView() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: null,
    nom: "",
    desc: "",
    done: false,
  });

  return (
    <>
      <div className="flex flex-col justify-center  h-screen gap-4">
        <div className="">
          <h1 className="text-blue-500  text-center font-bold text-3xl ">
            Todo <span className="text-red-500">App</span>
          </h1>
          <AddComponent updtDataTodos={setTodos}></AddComponent>
        </div>
        <div>
          {" "}
          <ListComponent
            todos={todos}
            updateDone={updateDone}
            deleteTodo={deleteTodo}
            setTodo={updateTodo}
          ></ListComponent>
        </div>
      </div>
    </>
  );

  function updateDone(id, isChecked) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: isChecked } : todo
      )
    );
  }
  function updateTodo(todoId, nom, desc) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, nom: nom, desc: desc } : todo
      )
    );
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
}
