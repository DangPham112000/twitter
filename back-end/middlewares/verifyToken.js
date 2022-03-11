const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');

    if (!Authorization) {
        // Lỗi thiếu token
    }

    // Get token 
    // Bearer alksdjklahlkwfnqlknqkwe
    const token = Authorization.repleace('Bearer ', '');

    // verify token
    const { userId } = jwt.verify(token, process.env.APP_SECRET);

    // assign req
    req.user = { userId };

    next();
}