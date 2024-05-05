import React from 'react';

export default function Todos({ todos }) {
    const handleSubmit = (todo) => {
        try{
            fetch(`http://localhost:3000/completed`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                title: todo.title,
                description: todo.description,
                id: todo._id,
            }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }catch(e){
        console.log(e);
    }
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
        button: {
            marginTop: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    };

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo._id} style={styles.container}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <button style={styles.button} onClick={() => handleSubmit(todo)}>
                        {todo.completed == true ? "Completed" : "Mark as Completed"}
                    </button>
                </div>
            ))}
        </div>
    );
}