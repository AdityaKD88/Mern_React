import React, { useState } from 'react'

const ToDo = () => {
    const [todoList, settodoList] = useState([])

    const addToDo = () =>{

    }
  return (
    <div className="container">
        <div className="card">
            <div className="card-header">
                <h4>ToDo List</h4>
            </div>

            <div className="card-body">
                <div className='input-group'>
                    <input className='form-control' />
                    <button className='btn btn-primary'>Add New Task</button>
                </div>
            </div>

        </div>


    </div>
  )
}

export default ToDo