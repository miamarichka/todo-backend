const express = require('express');
const controllers = require('../controllers/controllers')

const router = express.Router();
const {validateBody, isValidId} = require('../middlewares')
const { joiTodoSchema, updateCompletedSchema } = require('../models/todoModel');

router.get('/', controllers.getAllTodos);

router.get('/:id', isValidId, controllers.getTodoById);

router.post('/', validateBody(joiTodoSchema), controllers.addNewTodo);

router.put('/:id', isValidId, validateBody(joiTodoSchema), controllers.updateTodoById);

router.patch('/:id/completed', isValidId, validateBody(updateCompletedSchema), controllers.updateTodoStatus);

router.delete('/:id', isValidId, controllers.deleteById);

module.exports = router;

