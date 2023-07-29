import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='mx-auto'>
        <form onSubmit={handleSubmit}>
      <div className='d-flex gap-3 flex-sm-row flex-column'>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='input-field'
      />
      <input
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>
      <div className='d-flex justify-content-center'>
      <button type="submit" className='mt-3'>Add Task</button>
      </div>
    </form>
    </div>
  );
};

export default TaskForm;