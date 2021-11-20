import React from 'react'
import { Todo } from './Todo'

export const Todos = (props) => {
    return (
       <>
        <div className="container">
            <h3 className="text-center m-3">Todos List</h3>
            <Todo todo={props.todos[0]}/>
        </div>
       </>
    )
}
