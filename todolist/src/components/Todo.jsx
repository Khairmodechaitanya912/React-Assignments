import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'

const Todo = ({ todo }) => {

    const {myTodos, setMyTodos} = useContext(TodoContext)

    const [currentStatus,setCurrentStatus] = useState(todo.isCompleted)

    const deleteMyTodo = (id) => {
       
        if(confirm('Are you sure to want the delete to ? its can not be restore..')){
            setMyTodos(myTodos.filter(todo => todo.id != id ))
        }
    }

    const changeTodoStatus = () => {
        setCurrentStatus(!currentStatus)

        setMyTodos(myTodos.map(obj => {
            if(obj.id == todo.id){
                return {
                    ...obj,isCompleted: !obj.isCompleted
                }
            }else{
                return obj;
            }
        }))
    }
    return (
        <>
            <div className={`d-flex justify-content-between bg-${currentStatus ? 'success' : 'info'} mb-3 p-3 rounded-3 fs-5`}>
                <div className="todo-text"> {todo.desc}</div>
               <div className="todo-btn">
                <button className='btn btn-warning btn-sm me-2'onClick={changeTodoStatus}>{currentStatus ? 'completed' : 'Mark Complete'}</button>
                <button className='btn btn-danger btn-sm ' onClick={() => deleteMyTodo(todo.id)}>Delete</button>
               </div>
            </div>
        </>
    )
}

export default Todo