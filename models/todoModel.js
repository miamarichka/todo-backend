const mongoose = require('mongoose');
const Joi = require('joi');

const {handleMongooseError} = require('../helpers')

const joiTodoSchema = Joi.object({
    title: Joi.string().min(1).required(),
    completed: Joi.boolean(),
})

const updateCompletedSchema = Joi.object({
    completed: Joi.boolean().required(),
})

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Set todo title'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false, timestamps: true })

todoSchema.post('save', handleMongooseError);

const Todo = mongoose.model('todo', todoSchema);

module.exports = {Todo, joiTodoSchema, updateCompletedSchema}