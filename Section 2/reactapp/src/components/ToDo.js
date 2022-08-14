import React, { useState } from 'react'
import './todo.css'

const ToDo = () => {
    const [todoList, setTodoList] = useState([]);
    const [task, setTask] = useState("");

    const addToDo = () =>{
        setTodoList([...todoList, task])
    }

    const removeTodo = (index) => {
        let temp = todoList
        temp.splice(index,1)
        setTodoList([...temp])
    }

    const showTodoList = () => {
        return todoList.map( (task,i) => (
            <div className='task'>
                <p>{task}</p>
                <button className='btn btn-danger ml-auto' onClick={()=>{removeTodo(i)}}>
                    <i class="fa fa-trash"></i>
                </button>
            </div>
        ) )
    }

  return (
    <div className="container">
        <div className="card">
            <div className="card-header">
                <h4>ToDo List</h4>
            </div>

            <div className="card-body">
                <div className='input-group'>
                    <input className='form-control' onChange={(e) => {setTask(e.target.value)}}/>
                    <button className='btn btn-primary' onClick={addToDo}>Add New Task</button>
                </div>
                {showTodoList()}
            </div>

        </div>


    </div>
  )
}

export default ToDo