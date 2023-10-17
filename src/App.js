import { useEffect } from "react";
import {  getTodoTask } from "./functions/get";
import deleteTodo from "./functions/deleteTodo";
import add from "./functions/add";

const task = {
  text: 'lorem ipsum ', 
  completed: false,
  todo: 1 
}

const todo = {
  title: 'title of todo',
  user: [1, 25]
}

function App() {

  useEffect(()=>{
    console.log(add(task, 'task'))
    getTodoTask(1)
    deleteTodo('veIcxE1b9dhyk187TQg2', 'task')
  }, [])
  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;

