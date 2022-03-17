const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');

    if (!Authorization) {
        // Error: Missing token
        const err = new Error('Unauthorization!');
        err.statusCode = 401;
        return next(err);
    }

    // Get token 
    // Bearer alksdjklahlkwfnqlknqkwe
    const token = Authorization.replace('Bearer ', '');

    // verify token
    const { userId } = jwt.verify(token, process.env.APP_SECRET);

    // assign req
    req.user = { userId };

    next();
}