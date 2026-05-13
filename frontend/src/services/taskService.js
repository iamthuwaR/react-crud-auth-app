import api from "../api/axios";

// CREATE TASK
export const createTask = (data) => api.post("/tasks", data);

// GET TASKS
export const getTasks = () => api.get("/tasks");

// DELETE TASK
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

// UPDATE TASK
export const updateTask = (id, data) =>
    api.put(`/tasks/${id}`, data);