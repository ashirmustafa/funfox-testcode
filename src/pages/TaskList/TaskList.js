import React from 'react'
import Task from '../Task/Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const TaskList = ({ tasks, markCompleted, deleteTask }) => {
    return (
      <div>
        <TransitionGroup>
        {tasks.map((task, index) => (
          <CSSTransition key={task.id} timeout={500} classNames="task-item">
            <Task
              key={task.id}
              task={task}
              markCompleted={markCompleted}
              deleteTask={deleteTask}
              index={index} // Pass the index to the Task component
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      </div>
    );
  };
export default TaskList