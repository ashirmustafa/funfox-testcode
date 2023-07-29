import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { DragDropContext } from 'react-beautiful-dnd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <DragDropContext>
  <App />
</DragDropContext>

);



