import React from 'react';

export default function Todos({ todos }) {
    const handleSubmit = ({ id,title,description }) => {
        fetch("http://localhost:3000/completed", {
            method: "PUT",
            body: JSON.stringify({ title: title,
                description: description,
                id: id,}),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    };
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button onClick={handleSubmit(todo._id,todo.title,todo.description)}>
                        {todo.completed == true ? "Completed" : "Mark as Completed"}
                    </button>
                </div>
            ))}
        </div>
    );
}
