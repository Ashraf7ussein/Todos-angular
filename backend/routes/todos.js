const { Todo, validate } = require("../models/todo");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    subtasks: req.body.subtasks,
    status: req.body.status,
  });
  todo = await todo.save();

  res.send(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");

  res.send(todo);
});

module.exports = router;
