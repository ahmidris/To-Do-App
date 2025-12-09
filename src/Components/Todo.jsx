import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const ToDo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const toggle  = (id) => {
    setTodoList((prevTodos) =>{
        return prevTodos.map((todo) => {
            if(todo.id === id){
                return {...todo, isCompleted: !todo.isCompleted};
            }
            return todo;
    });
  })
};
useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}, [todoList]);


  return (
    <div className="bg-gray-500 place-self-center w-11/12 
      max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

      {/* Title */}
      <div className="min-h-screen bg-[#0f172a] flex flex-col items-center">
        <img className="w-8 invert my-2.5" src={todo_icon} alt="" />
         <h1 className="text-3xl font-semibold text-white">To-Do List App</h1>

        {/* Input */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 
          w-28 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>
       

       <div>
        {todoList.map((item) => (
          <TodoItems
            key={item.id}
            id={item.id}
            text={item.text}
            isCompleted={item.isCompleted}
            deleteTodo={deleteTodo}
            toggle={toggle}
          />
        ))}
      </div>

       </div>


      

      {/* Todo list */}
      
    </div>
  );
};

export default ToDo;
