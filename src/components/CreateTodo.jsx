import React, { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => {
        setTitle("");
        setDescription("");
      });
  };

  return (
    <div>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
        style={{ backgroundColor: "lightblue", color: "white" }}
      />
      <br />
      <input
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
        style={{ backgroundColor: "lightgreen", color: "black" }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Add Todo
      </button>
    </div>
  );
}
