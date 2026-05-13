import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

// Token helper
const getToken = () => localStorage.getItem("token");

const authHeader = {
    headers: {
        Authorization: `Bearer ${getToken()}`,
    },
};

// CREATE TASK
export const createTask = (data) => {
    return axios.post(API_URL, data, authHeader);
};

// GET TASKS
export const getTasks = () => {
    return axios.get(API_URL, authHeader);
};

// UPDATE TASK
export const updateTask = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data, authHeader);
};

// DELETE TASK
export const deleteTask = (id) => {
    return axios.delete(`${API_URL}/${id}`, authHeader);
};