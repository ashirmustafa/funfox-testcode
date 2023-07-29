import React, { useState } from "react";
import Task from "./pages/Task/Task";
import TaskForm from "./pages/TaskForm/TaskForm";
import TaskList from "./pages/TaskList/TaskList";
import FeedbackMessage from "./pages/Feedback/FeedbackMessage";
import './App.css'
// import { Route, Routes } from 'react-router-dom';




function App() {

  const [tasks, setTasks] = useState([]);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const addTask = (newTask) => {
    newTask.id = Date.now().toString();
    setTasks([...tasks, newTask]);
    setFeedbackMessage('Task added successfully!');
    setTimeout(() => setFeedbackMessage(''), 3000); // Hide the message after 3 seconds
  };

  const markCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    setFeedbackMessage('Task marked as completed!');
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setFeedbackMessage('Task deleted successfully!');
    setTimeout(() => setFeedbackMessage(''), 3000);
  };



  return (
    // <Routes>
    //   <Route path="/" Component={Tasks}/>
    // </Routes>

    <div className="container-xl">
    <div className="text-center py-5">
      <img src="https://funfoxprogram.com.au/Themes/WristwearTheme/Content/images/logo.png" width={300} />
    </div>
      <div className="d-flex  flex-column ">
        <h1 className="text-center">Task Management System</h1>
        <TaskForm addTask={addTask} />
        {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}
        <TaskList tasks={tasks} markCompleted={markCompleted} deleteTask={deleteTask} />
      </div>
    </div>

  );
}

export default App;
