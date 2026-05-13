const express = require("express");
const Task = require("../models/Task");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();


// CREATE TASK
router.post("/", verifyToken, async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            userId: req.user.id,
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// GET TASKS (ONLY LOGGED USER)
router.get("/", verifyToken, async (req, res) => {
    try {
        const tasks = await Task.findAll({
            where: { userId: req.user.id },
        });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// UPDATE TASK
router.put("/:id", verifyToken, async (req, res) => {
    try {
        const task = await Task.findOne({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        task.title = req.body.title;
        await task.save();

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// DELETE TASK
router.delete("/:id", verifyToken, async (req, res) => {
    try {
        const deleted = await Task.destroy({
            where: {
                id: req.params.id,
                userId: req.user.id,
            },
        });

        if (!deleted) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;