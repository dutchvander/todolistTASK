import React, { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className="todo-item"
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "white",
        marginBottom: "8px",
        borderRadius: "4px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: "10px" }}
      />
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          style={{ flex: 1, display: "flex", gap: "10px" }}
        >
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{
              flex: 1,
              padding: "5px",
              borderRadius: "4px",
              border: "1px solid #ddd",
            }}
            autoFocus
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditText(todo.text);
            }}
            style={{
              backgroundColor: "#888",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              flex: 1,
              color: todo.completed ? "#888" : "#333",
            }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "8px",
            }}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            style={{
              backgroundColor: "#ff4444",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
