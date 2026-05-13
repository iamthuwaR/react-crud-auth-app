import { useEffect, useState } from "react";
import {
    createTask,
    getTasks,
    deleteTask,
    updateTask,
} from "../services/taskService";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [editId, setEditId] = useState(null);

    // FETCH TASKS
    const fetchTasks = async () => {
        try {
            const res = await getTasks();
            setTasks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // CREATE / UPDATE TASK
    const handleSubmit = async () => {
        if (!title.trim()) return;

        try {
            if (editId) {
                await updateTask(editId, { title });
                setEditId(null);
            } else {
                await createTask({ title });
            }

            setTitle("");
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    // DELETE TASK
    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
        } catch (error) {
            console.log(error);
        }
    };

    // EDIT MODE
    const handleEdit = (task) => {
        setTitle(task.title);
        setEditId(task.id);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Task Manager</h2>

            {/* INPUT */}
            <input
                type="text"
                placeholder="Enter task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={handleSubmit}>
                {editId ? "Update Task" : "Add Task"}
            </button>

            {/* TASK LIST */}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.title}

                        <button onClick={() => handleEdit(task)}>
                            Edit
                        </button>

                        <button onClick={() => handleDelete(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}