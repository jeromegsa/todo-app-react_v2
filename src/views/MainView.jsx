import { useState } from "react";
import AddComponent from "../components/AddComponent.jsx";
import ListComponent from "../components/ListComponent.jsx";

export default function MainView() {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({ id: null, nom: "", desc: "", done: false });

    return (
        <>
            <h1 className="text-red-500">Todo</h1>
            <AddComponent updtDataTodos={setTodos}></AddComponent>
            <ListComponent todos={todos} updateDone={updateDone} deleteTodo={deleteTodo} setTodo={updateTodo} ></ListComponent>
        </>
    );

    function updateDone(id, isChecked) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: isChecked } : todo
            ))
    }
    function updateTodo(todoId, nom, desc) {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === todoId ? { ...todo, nom: nom, desc: desc } : todo
            ))

    }
    function deleteTodo(id) {
        setTodos((prevTodos) =>
            prevTodos.filter((todo) => todo.id !== id))
    }
}
