import React from 'react'
import { Todo } from '../models/models';
import SingleToDo from './SingleToDo';

interface Props {
    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}
const ToDoList: React.FC<Props>= ({todos,setTodos}) => {
  return (
    <div className='todos'>
       {todos.map((todo) => (
         <SingleToDo 
         todo={todo}
         key={todo.id}
         todos={todos}
         setTodos={setTodos}
         />
       ))}
       
    </div>
  )
}

export default ToDoList