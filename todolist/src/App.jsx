import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import TodoApp from './components/TodoApp'
import { useState } from 'react'
import TodoContext from './context/TodoContext'

function App() {

  const [myTodos, setMyTodos] = useState([
    {
      id:1,
      desc:'My First TODO',
      isCompleted:false,
    },
    {
      id:2,
      desc:'My second TODO',
      isCompleted:false,
    },
    {
      id:3,
      desc:'Prepare for Interview',
      isCompleted:false,
    },

  ])

  return (
    <>
      <TodoContext.Provider value={{myTodos,setMyTodos}}>
        <TodoApp />
      </TodoContext.Provider>
    </>
  )
}

export default App
