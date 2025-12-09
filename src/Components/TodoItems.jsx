import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
   <div className="flex items-center justify-between w-full bg-gray-700 px-5 py-3 rounded-xl mb-3">

  {/* Left side: circle + text */}
  <div onClick={() => toggle(id)} className="flex items-center cursor-pointer gap-4">
    <img className="w-6" src={isCompleted ? tick : not_tick} alt="" />

    <p
      className={`
        text-white text-[18px]
        ${isCompleted ? "line-through text-gray-400" : ""}
      `}
    >
      {text}
    </p>
  </div>

  {/* Right side: delete icon */}
  <img
    onClick={() => deleteTodo(id)}
    className="w-5 cursor-pointer invert ml-4"
    src={delete_icon}
    alt=""
  />

</div>

  )
}

export default TodoItems

