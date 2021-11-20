import React from 'react'

export const Todo = ({todo, handleDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.description}</p>
            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(todo)}>Delete</button>
        </div>
    )
}
