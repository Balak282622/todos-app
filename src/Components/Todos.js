import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
       <>
        <div className="container">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0 ?"No Todos to display" : props.todos.map((todo) =>{
                return <Todo todo={todo} key={todo.sno} handleDelete={props.handleDelete}/>
            })}
        </div>
       </>
    )
}
