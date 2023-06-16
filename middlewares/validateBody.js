const { httpError } = require('../helpers');

const validateBody = shcema => {
    const func = (req, res, next) => {
        if (!req.body) {
            return res.status(400).json({'message': 'missing fields'})
        }
        const { error } = shcema.validate(req.body)
        if (error) {
            next(httpError(404, error.message))
        }
        next()
    }
    return func;
}

module.exports = validateBody