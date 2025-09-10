import React, { useState } from "react";
import "./Todo.css";

function Todo() {
  let [todos, setTodos] = useState([{ id: 1, task: "sample-code" }]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    if (newTodo.trim() === "") return;

    const newTask = {
      id: Date.now(),
      task: newTodo.trim()
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  }

  function handleEvent(event) {
    setNewTodo(event.target.value);
  }

  function deleteBtn(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function updateAllCases() {
    setTodos(
      todos.map(todo => ({
        ...todo,
        task: todo.task.toUpperCase()
      }))
    );
  }
          
  function updateOne(id){
    setTodos((todos)=>(
        todos.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            }else{
                return todo;
            }
           
        }
        ))
    )
   }
        function markAsDone(id){
          setTodos((todos)=>(
            todos.map((todo)=>{
                if(todo.id == id){
                    return {
                        ...todo,
                       isDone:true
                    }
                }else{
                    return todo;
                }
               
            }
            ))
        )
        }
  return (
    <>
      <div className="todo">
        <div className="todo-1">
          <input placeholder="Task add kro" value={newTodo} onChange={handleEvent} />
          <button onClick={addNewTask}>Task Add</button>
        </div>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
          <span style={todo.isDone ? {textDecoration:"line-through"}:{}}> {todo.task} {""} </span>
            <button className="deleteBtn" onClick={() => deleteBtn(todo.id)}>Delete</button>
            <button className="updateOne" onClick={()=>updateOne(todo.id)}>UpdateOne</button>
            <button className="markAsDone"  onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>

      <button className="updateAll" onClick={updateAllCases}>Update All Cases</button>
    </>
  );
}

export default Todo;
