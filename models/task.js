import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        // validation
        required: [true, "must provide name"],
        trim: true,
        // validation:
        maxLength: [20, "name con not be more than 20 characters"],
    },
    completed: {
        type: Boolean,
        required: [true, "must provide if task is completed"],
        // default: false
    },
    status: {
        type: Boolean,
        default: true,
    },
});

export default mongoose.model("Task", TaskSchema);
