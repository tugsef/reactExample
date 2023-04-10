import React, { useState , useEffect} from 'react'
import "./styles.css"
import List from './List'


function Todo() {
  const [todos , setTodos] = useState([]);

  useEffect(()=>{
console.log(todos);
  },[todos]);
  return (
    <div>
        <List setTodos={setTodos}  todos={todos}/>
    </div>
  )
}

export default Todo