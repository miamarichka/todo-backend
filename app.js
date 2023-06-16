const express = require('express');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();

const todosRouter = require('./routes/todos');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'combined' : 'short'

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/todos', todosRouter);

app.use((req, res) => {
    console.log('here')
    res.status(404).json({message: 'Not found 404'})
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Service error' } = err;
    res.status(status).json({message: message})
})

module.exports = app;