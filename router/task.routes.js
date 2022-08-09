import { Router } from "express";
import {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} from "../controller/task.controller.js";

export const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);