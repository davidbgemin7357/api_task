import Task from "../models/task.js";
import { asyncWrapper } from "../middleware/async.js";
import { createCustomError } from "../errors/curstom-error.js";

export const getTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({ status: true });
    return res.status(200).json({ tasks });
});

export const getTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID, status: true });
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404));
    }

    return res.status(200).json({ task });
});

export const createTask = asyncWrapper(async (req, res) => {
    const newTask = await Task.create(req.body);
    return res.status(201).json({ newTask });
});


export const deleteTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate(
        taskID,
        { status: false },
        {
            new: true,
        }
    );
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }
    return res.status(200).json({ task });
});

export const updateTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }
    return res.status(200).json({ task });
});
