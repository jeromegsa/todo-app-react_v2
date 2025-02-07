import { useState } from "react";

export default function ListComponent({
  todos,
  updateDone,
  deleteTodo,
  setTodo,
}) {
  const [editingItemId, setEditingItemId] = useState();

  const [nomValue, setNomValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  function handleNomChange(e) {
    setNomValue(e.target.value);
  }
  function handleDescChange(e) {
    setDescValue(e.target.value);
  }

  function updateTodo(todoId, nom, desc) {
    setTodo(todoId, nom, desc);
    setDescValue("");
    setNomValue("");
    setEditingItemId(0);
    setIsUpdating(false);
  }

  if (todos.length !== 0) {
    return (
      <div className="card-container">
        {todos.map((todo, index) => (
          <div key={todo.id} className="todo-card width-500 p-4 bg-gray-100  border-l-blue-500 rounded-lg mt-5 shadow-lg">
            <div className="card-header">
              <span className="todo-index">{index + 1}</span>
              <span className="todo-name">
                {!isUpdating || editingItemId !== todo.id ? (
                  <span
                    style={{
                      textDecoration: todo.done ? "line-through" : "none",
                    }}
                  >
                    {todo.nom}
                  </span>
                ) : (
                  <input
                    type="text"
                    value={nomValue}
                    onChange={handleNomChange}
                  />
                )}
              </span>
            </div>

            <div className="card-body">
              {!isUpdating || editingItemId !== todo.id ? (
                <p className="todo-description">{todo.desc}</p>
              ) : (
                <input
                  type="text"
                  value={descValue}
                  onChange={handleDescChange}
                />
              )}
            </div>

            <div className="card-footer">
              <div className="actions">
                {!isUpdating || editingItemId !== todo.id ? (
                  <button
                    onClick={() => {
                      setIsUpdating(true);
                      setEditingItemId(todo.id);
                      setNomValue(todo.nom);
                      setDescValue(todo.desc);
                    }}
                  >
                    Modifier
                  </button>
                ) : (
                  <button
                    onClick={() => updateTodo(todo.id, nomValue, descValue)}
                  >
                    Enregistrer
                  </button>
                )}

                <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>

                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(event) =>
                    updateDone(todo.id, event.target.checked)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col items-center gap-2 mt-9">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="80px"
              viewBox="0 -960 960 960"
              width="80px"
              fill="#EA3323"
            >
              <path d="M450-380v-380h60v380h-60Zm0 180v-60h60v60h-60Z" />
            </svg>
          </p>

          <p className="font-thin text-xl">
            Vous n'avez pas encore de tâches à faire
          </p>
        </div>
      </>
    );
  }
}
