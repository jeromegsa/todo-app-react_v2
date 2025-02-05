import { useState } from "react";

export default function ListComponent({ todos, updateDone, deleteTodo, setTodo }) {
    const [editingItemId, setEditingItemId] = useState();

    const [nomValue, setNomValue] = useState("")
    const [descValue, setDescValue] = useState("")
    const [isUpdating, setIsUpdating] = useState(false);
    function handleNomChange(e) {
        setNomValue(e.target.value)
    }
    function handleDescChange(e) {
        setDescValue(e.target.value)
    }

    function updateTodo(todoId, nom, desc) {
        setTodo(todoId, nom, desc);
        setDescValue('');
        setNomValue('');
        setEditingItemId(0);
        setIsUpdating(false);

    }

    if (todos.length !== 0) {
        return (
            <table >
                <thead>
                    <th>num</th>
                    <th>nom</th>
                    <th>Descriptions</th>
                    <th>Actions</th>
                </thead>
                <tbody >

                    {todos.map((todo, index) =>
                        <tr key={todo.id} >
                            <td>{index + 1}</td>
                            <td >{!isUpdating || editingItemId !== todo.id 
                            ? <span   style={{textDecoration:todo.done? "line-through":"none"}}>{todo.nom}</span>
                                : <input type="text" value={nomValue} onChange={handleNomChange} />}
                            </td>

                            <td>{!isUpdating || editingItemId !== todo.id ? todo.desc
                                : <input type="text" value={descValue} onChange={handleDescChange} />}
                            </td>

                            <td>
                                <span>
                                    {!isUpdating || editingItemId !== todo.id
                                        ? <button onClick={() => {
                                            setIsUpdating(true);
                                            setEditingItemId(todo.id);
                                            setNomValue(todo.nom)
                                            setDescValue(todo.desc)
                                        }

                                        }  ><span >Modifier</span>
                                        </button>
                                        : <button onClick={() => updateTodo(todo.id, nomValue, descValue)}>Enregistrer </button>
                                    }
                                    <button onClick={() => deleteTodo(todo.id)}>
                                        Supprimer
                                    </button>
                                    <input type="checkbox" checked={todo.done} onChange={(event) => updateDone(todo.id, event.target.checked)} />
                                </span>
                            </td>
                        </tr>)}


                </tbody>
            </table>)
    } else {
        return (<p> Pas de tâches disponibles ! </p>
        )
    }


}