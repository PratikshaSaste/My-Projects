import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './models/models';
import ToDoList from './components/ToDoList';
import SingleToDo from './components/SingleToDo';


const App: React.FC= () => {
const [todo, setTodo] = useState<string>("");
const [todos, setTodos] = useState<Todo[]>([]);

const handleAdd = (e: React.FormEvent) => {
  e.preventDefault();

  if (todo) {
    setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    setTodo("");
  }
}

  return (
    <div className="App">
      <span className="heading">
        TAskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
