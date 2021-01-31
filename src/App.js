import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
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
  }
  function handleClearAll(e){
    setTodos(_ =>{
      return []
    });
  }
  return (
    <>
      {/*  <Component props={props}> */}
      
      <input ref={todoNameRef}type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearAll}>Clear all</button>
      <div>{todos.filter(t=>!t.complete).length} things left to do</div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/> 
      {/* <div>{JSON.stringify(todos)}</div> */}
    </>
  );
}

export default App;
