import React, { useContext } from 'react'
import Todo from './Todo'
import TodoContext from '../context/TodoContext'

const DisplayTodo = () => {
    const {myTodos} = useContext(TodoContext)
  return (
    <>
        {
            myTodos.map(todo => <Todo key={todo.id} todo={todo}/>)
        }
        
    </>
  )
}

export default DisplayTodo