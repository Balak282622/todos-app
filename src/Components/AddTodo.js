import React from 'react'

export const AddTodo = () => {
    return (
        <div className="container mxy-3">
            <h3>Add a Todo</h3>
            <form>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="description" className="form-label">Todo Description</label>
                    <input type="password" className="form-control" id="description"/>
                </div>
                <button type="submit" className="btn btn-sm btn-info">Add Todo</button>
            </form>
        </div>
    )
}
