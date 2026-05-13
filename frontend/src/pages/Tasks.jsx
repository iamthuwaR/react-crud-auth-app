// import { useEffect, useState } from "react";
// import {
//     createTask,
//     getTasks,
//     deleteTask,
//     updateTask,
// } from "../services/taskService";

// export default function Tasks() {
//     const [tasks, setTasks] = useState([]);
//     const [title, setTitle] = useState("");
//     const [editId, setEditId] = useState(null);

//     // FETCH TASKS
//     const fetchTasks = async () => {
//         try {
//             const res = await getTasks();
//             setTasks(res.data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     // CREATE / UPDATE TASK
//     const handleSubmit = async () => {
//         if (!title.trim()) return;

//         try {
//             if (editId) {
//                 await updateTask(editId, { title });
//                 setEditId(null);
//             } else {
//                 await createTask({ title });
//             }

//             setTitle("");
//             fetchTasks();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // DELETE TASK
//     const handleDelete = async (id) => {
//         try {
//             await deleteTask(id);
//             fetchTasks();
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleEdit = (task) => {
//         setTitle(task.title);
//         setEditId(task.id);
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#efe7ff] to-[#e2d4ff] p-8">

//             {/* HEADER */}
//             <div className="max-w-6xl mx-auto">

//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

//                     <div>
//                         <h1 className="text-5xl font-bold text-gray-900">
//                             Task <span className="text-purple-600">Manager</span>
//                         </h1>

//                         <p className="text-gray-600 mt-3 text-lg">
//                             Organize, manage, and update your daily workflow efficiently.
//                         </p>
//                     </div>

//                     {/* TASK COUNT */}
//                     <div className="bg-white px-6 py-5 rounded-2xl shadow-md border border-purple-100 min-w-[180px]">
//                         <p className="text-gray-500 text-sm">
//                             Total Tasks
//                         </p>

//                         <h2 className="text-4xl font-bold text-purple-600 mt-2">
//                             {tasks.length}
//                         </h2>
//                     </div>
//                 </div>

//                 {/* INPUT CARD */}
//                 <div className="mt-10 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-purple-100 p-8">

//                     <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                         {editId ? "Update Task" : "Create New Task"}
//                     </h2>

//                     <div className="flex flex-col md:flex-row gap-4">

//                         <input
//                             type="text"
//                             placeholder="Enter your task..."
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="flex-1 px-5 py-4 rounded-2xl border border-gray-200
//                             focus:ring-2 focus:ring-purple-400 outline-none transition text-gray-700"
//                         />

//                         <button
//                             onClick={handleSubmit}
//                             className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600
//                             text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
//                             transition-all duration-300"
//                         >
//                             {editId ? "Update Task" : "Add Task"}
//                         </button>
//                     </div>
//                 </div>

//                 {/* TASK LIST */}
//                 <div className="mt-10 grid gap-5">

//                     {tasks.length === 0 ? (
//                         <div className="bg-white rounded-3xl p-12 text-center shadow-md border border-purple-100">

//                             <h3 className="text-2xl font-semibold text-gray-800">
//                                 No Tasks Yet
//                             </h3>

//                             <p className="text-gray-500 mt-3">
//                                 Start by creating your first task
//                             </p>
//                         </div>
//                     ) : (
//                         tasks.map((task) => (
//                             <div
//                                 key={task.id}
//                                 className="bg-white rounded-3xl p-6 shadow-md border border-purple-100
//                                 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row
//                                 md:items-center md:justify-between gap-5"
//                             >

//                                 {/* TASK INFO */}
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-800">
//                                         {task.title}
//                                     </h3>

//                                     <p className="text-sm text-gray-500 mt-1">
//                                         Task ID: #{task.id}
//                                     </p>
//                                 </div>

//                                 {/* ACTION BUTTONS */}
//                                 <div className="flex gap-3">

//                                     <button
//                                         onClick={() => handleEdit(task)}
//                                         className="px-5 py-2 rounded-xl bg-purple-100 text-purple-700
//                                         font-medium hover:bg-purple-200 transition"
//                                     >
//                                         Edit
//                                     </button>

//                                     <button
//                                         onClick={() => handleDelete(task.id)}
//                                         className="px-5 py-2 rounded-xl bg-red-100 text-red-600
//                                         font-medium hover:bg-red-200 transition"
//                                     >
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }



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

    const [error, setError] = useState("");

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

    // VALIDATION
    const validate = () => {
        if (!title.trim()) {
            setError("Task title is required");
            return false;
        }

        if (title.trim().length < 3) {
            setError("Task must be at least 3 characters");
            return false;
        }

        if (title.trim().length > 100) {
            setError("Task is too long (max 100 characters)");
            return false;
        }

        setError("");
        return true;
    };

    // CREATE / UPDATE TASK
    const handleSubmit = async () => {
        if (!validate()) return;

        try {
            if (editId) {
                await updateTask(editId, { title });
                setEditId(null);
            } else {
                await createTask({ title });
            }

            setTitle("");
            setError("");
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

    const handleEdit = (task) => {
        setTitle(task.title);
        setEditId(task.id);
        setError("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f8f5ff] via-[#efe7ff] to-[#e2d4ff] p-8">

            {/* HEADER */}
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                    <div>
                        <h1 className="text-5xl font-bold text-gray-900">
                            Task <span className="text-purple-600">Manager</span>
                        </h1>

                        <p className="text-gray-600 mt-3 text-lg">
                            Organize, manage, and update your daily workflow efficiently.
                        </p>
                    </div>

                    <div className="bg-white px-6 py-5 rounded-2xl shadow-md border border-purple-100 min-w-[180px]">
                        <p className="text-gray-500 text-sm">Total Tasks</p>
                        <h2 className="text-4xl font-bold text-purple-600 mt-2">
                            {tasks.length}
                        </h2>
                    </div>
                </div>

                {/* INPUT CARD */}
                <div className="mt-10 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-purple-100 p-8">

                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                        {editId ? "Update Task" : "Create New Task"}
                    </h2>

                    <div className="flex flex-col md:flex-row gap-4">

                        <input
                            type="text"
                            placeholder="Enter your task..."
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="flex-1 px-5 py-4 rounded-2xl border border-gray-200
                            focus:ring-2 focus:ring-purple-400 outline-none transition text-gray-700"
                        />

                        <button
                            onClick={handleSubmit}
                            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-fuchsia-600
                            text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02]
                            transition-all duration-300"
                        >
                            {editId ? "Update Task" : "Add Task"}
                        </button>
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                        <p className="text-red-500 text-sm mt-3">
                            {error}
                        </p>
                    )}
                </div>

                {/* TASK LIST */}
                <div className="mt-10 grid gap-5">

                    {tasks.length === 0 ? (
                        <div className="bg-white rounded-3xl p-12 text-center shadow-md border border-purple-100">
                            <h3 className="text-2xl font-semibold text-gray-800">
                                No Tasks Yet
                            </h3>
                            <p className="text-gray-500 mt-3">
                                Start by creating your first task
                            </p>
                        </div>
                    ) : (
                        tasks.map((task) => (
                            <div
                                key={task.id}
                                className="bg-white rounded-3xl p-6 shadow-md border border-purple-100
                                hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row
                                md:items-center md:justify-between gap-5"
                            >
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {task.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mt-1">
                                        Task ID: #{task.id}
                                    </p>
                                </div>

                                <div className="flex gap-3">

                                    <button
                                        onClick={() => handleEdit(task)}
                                        className="px-5 py-2 rounded-xl bg-purple-100 text-purple-700
                                        font-medium hover:bg-purple-200 transition"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(task.id)}
                                        className="px-5 py-2 rounded-xl bg-red-100 text-red-600
                                        font-medium hover:bg-red-200 transition"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}