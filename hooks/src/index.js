import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TaskList from './taskList';


const root = ReactDOM.createRoot(document.getElementById('root'));
function todoList() {
    root.render(
        <React.StrictMode>
            <TaskList />
        </React.StrictMode>
    );
}

root.render(
  <React.StrictMode>

    {/*Create buttons with shortcuts of apps*/}
    <div className="container">
        <button onClick={todoList}>Todo List</button>
    </div>
  </React.StrictMode>
);
