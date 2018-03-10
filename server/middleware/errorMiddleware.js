
const errorMiddleware = (error, req, res, next) => {
    if (error instanceof SyntaxError && error.body) {
        console.warn('invalid request body received', { errorData: error });
        res.status(400).json({ message: 'bad request', status: 400 });
    } else {
        console.error('something went wrong', { errorData: error });
        res.status(500).json({ message: 'something went wrong', status: 500 });
    }

    next();
}

export default errorMiddleware;