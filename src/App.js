import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import MyGoldenLayout from './MyGoldenLayout';
import GoldenLayout from 'golden-layout';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  window.React = React;
  window.ReactDOM = ReactDOM;
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()
  //load saved data in launch
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos);
  }, [])

  //when todos changed call this hook.
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]); //objects in this array is a dependency

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo=>todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameRef.current.value;
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name, complete:false}];
    });
    todoNameRef.current.value = "";
  }
  function handleClearAll(e){
    setTodos(t =>{
      return []
    });
  }
  return (
    <>
      {/*  <Component props={props}> */}
      <input ref={todoNameRef} type="text"/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearAll}>Clear all</button>
      <div>{todos.filter(t=>!t.complete).length} things left to do. {todos.filter(t=>!t.complete).length === 0 && "Hooray!"}</div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/> 
      <MyGoldenLayout />
    </>
  );
}

export default App;
