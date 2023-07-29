import React from 'react'

const Task = ({ task, markCompleted, deleteTask }) => {
    return (
        <>
            <div className='br-24 mb-3 mt-4 p-4 task'>
                <h3 className='text-center'>{task.title}</h3>
                <p className='text-center'>{task.description}</p>
                <div className='d-flex justify-content-between align-items-center flex-sm-row flex-column gap-3 flex-column-reverse'>
                    <button onClick={() => markCompleted(task.id)} className='button-pink'>Mark Completed</button>
                    <button onClick={() => deleteTask(task.id)} className='button-orange'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Task
