const Joi = require("joi");
const mongoose = require("mongoose");

// Subtask Schema
const SubtaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["todo", "doing", "done"],
    default: "todo",
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Todo Schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["todo", "doing", "done"],
    default: "todo",
  },
  description: {
    type: String,
  },
  subtasks: [SubtaskSchema],
});

const Todo = mongoose.model("Todo", todoSchema);

function validateTodo(todo) {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    completed: Joi.boolean(),
    status: Joi.string().valid("todo", "doing", "done"),
    description: Joi.string(),
    subtasks: Joi.array().items(
      Joi.object({
        title: Joi.string().min(3).required(),
        status: Joi.string().valid("todo", "doing", "done"),
        completed: Joi.boolean(),
      })
    ),
  });

  return schema.validate(todo);
}

exports.Todo = Todo;
exports.validate = validateTodo;
