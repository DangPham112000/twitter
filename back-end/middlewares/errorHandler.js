exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    // Duplication
    if (err.code === 11000) {
        err.statusCode = 400;
        for (let key in err.keyValue) {
            err.message = `${key} must be unique!`;
        }
    }

    // wrong objectid
    if (err.kind === 'ObjectId') {
        err.statusCode = 404;
        err.message = `The ${req.originalUrl} is not found beause wrong ID`; 
    }

    // validation
    if (err.errors) {
        err.statusCode = 400;
        err.message = [];
        for (let key in err.errors) {
            err.message.push(err.errors[key].properties.message);
        }
    }

    
    // other 
    res.status(err.statusCode).json({
        status: 'fail',
        message: err.message
    });
}