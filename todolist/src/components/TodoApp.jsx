import React from 'react'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'

const TodoApp = () => {
  return (
    <>
        <div className="container">
            <AddTodo/>
            <DisplayTodo/>
        </div>
    </>
  )
}

export default TodoApp