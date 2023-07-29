import React from 'react'
import Task from '../Task/Task';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Droppable } from 'react-beautiful-dnd'
const TaskList = ({ tasks, markCompleted, deleteTask }) => {
    return (
      <Droppable droppableId="taskList">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
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
          {provided.placeholder}
        </div>
      )}
    </Droppable>
    );
  };
export default TaskList