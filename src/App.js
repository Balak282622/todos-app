import "./App.css";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Todos } from "./Components/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "../node_modules/react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const handleDelete = (todo) => {
    console.log("delete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("I am adding this todo", title, description);
    let sno;
    todos.length === 0 ? (sno = 0) : (sno = todos[todos.length - 1].sno + 1);
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <Router>

      <Header title="My Todos List" searchBar={false} />
      <Switch>
          <Route exact path="/" render = {()=>{
            return( 
            <> 
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} handleDelete={handleDelete} />

            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

      <Footer />

    </Router>
    </>
  );
}

export default App;
