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

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      border: '1px solid #ddd',
      margin: '10px',
      borderRadius: '5px',
    },
    input: {
      margin: '10px 0',
      padding: '10px',
      width: '80%',
      borderRadius: '5px',
    },
    button: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
        style={{ ...styles.input, backgroundColor: "lightblue", color: "white" }}
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
        style={{ ...styles.input, backgroundColor: "lightgreen", color: "black" }}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Add Todo
      </button>
    </div>
  );
}