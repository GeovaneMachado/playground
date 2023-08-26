import React, {useEffect, useState, useMemo, useCallback} from 'react';
import './App.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);

    useEffect(() => {
        const parse = JSON.parse(localStorage.getItem('tasks'));
        if (parse) {
            setTasks(parse);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
        if (tasks) localStorage.setItem('tasks', JSON.stringify(tasks));
        }, 1000);
    }, [tasks]);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (edit) {
            let newTasks = tasks.map((item) => {
                return item.id === id ? { ...item, task } : item;
            });
            setTasks(newTasks);
            setEdit(false);
            setTask('');
            setId(null);
        } else {
            const newTask = { id: new Date().getTime().toString(), task };
            if (task) {
                setTasks([...tasks, newTask]);
                setTask('');
            }
        }
    }, [edit, id, task, tasks])

    const removeTask = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    const editTask = (id) => {
        let newEditTask = tasks.find((item) => item.id === id);
        setEdit(true);
        setTask(newEditTask.task);
        setId(id);
    };

    const totalTasks = useMemo(() => tasks.length, [tasks]);
    return (
        <div className="container">
            <h1>Todo App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                <button type="submit">{edit ? 'Save' : 'Submit'}</button>
            </form>
            <div className="tasks">
                {tasks.length > 0 ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Task ({totalTasks})</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.task}</td>
                                    <td>
                                        <button onClick={() => removeTask(item.id)}>Remove</button>
                                        <button onClick={() => editTask(item.id)}>Edit</button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                ) : (
                    <p>No tasks found.</p>
                )}
            </div>
        </div>
    );
}

export default TaskList;
