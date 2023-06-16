/** @format */

const { Todo } = require("../models/todoModel");
const { ctrlWrapper, httpError } = require('../helpers');

const getAllTodos = async (req, res, next) => {
    const data = await Todo.find();

    if (!data) {
      throw httpError(404, "Not found");
    }

    res.status(200).json({ data });
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const data = await Todo.findById(id);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.status(200).json({ data });
};

const addNewTodo = async (req, res) => {
  const data = await Todo.create(req.body);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.status(201).json(data);
};

const deleteById = async (req, res) => {
  const { id } = req.params;

  const data = await Todo.findByIdAndDelete(id);

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.status(200).json(data);
};

const updateTodoById = async (req, res) => {
  const { id } = req.params;

  const data = await Todo.findByIdAndUpdate(id, req.body, { new: true });

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.status(200).json(data);
};

const updateTodoStatus = async (req, res, next) => {
  const { id } = req.params;

  const data = await Todo.findByIdAndUpdate(id, req.body, { new: true });

  if (!data) {
    throw httpError(404, "Not found");
  }

  res.status(200).json(data);
};

module.exports = {
  getAllTodos: ctrlWrapper(getAllTodos),
  getTodoById: ctrlWrapper(getTodoById),
  addNewTodo: ctrlWrapper(addNewTodo),
  deleteById: ctrlWrapper(deleteById),
  updateTodoById: ctrlWrapper(updateTodoById),
  updateTodoStatus: ctrlWrapper(updateTodoStatus),
};
