import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'

const AddTodo = () => {
    const [userInput, setUserInput] = useState('')
    const {myTodos,setMyTodos} = useContext(TodoContext)

    const addMyTodo = () => {
        let newTodo = {
            id: Date.now(),
            desc: userInput,
            isCompleted: false,
        }

        setMyTodos([...myTodos,newTodo])

        setUserInput('')
    }
  return (
    <>
        <div className="d-flex p-3 justify-content-evenly">
            <input type="text" name="" id="" className='form-control border border-dark w-50' onChange={e => setUserInput(e.target.value)} value={userInput}/>
            <button className='btn btn-primary btn-sm' onClick={addMyTodo}>Add Todo</button>
        </div>
    </>
  )
}

export default AddTodo