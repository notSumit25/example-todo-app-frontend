import React from 'react';

export function CreateTodo() {
    return (
        <div>
            <input type="text" placeholder='title' style={{ backgroundColor: 'lightblue', color: 'white' }} />
            <input type="text" placeholder='description' style={{ backgroundColor: 'lightgreen', color: 'black' }} />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Add Todo</button>
        </div>
    );
}
