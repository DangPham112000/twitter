const jwt = require('jsonwebtoken');

exports.checkCurrentUser = (req, res, next) => {
    // Access Authorization from req header
    const Authorization = req.header('authorization');

    if (!Authorization) {
        req.user = null;
        return next();
    } 
    
    // Get token
    const token = Authorization.replace('Bearer ', '');


    try {        
        // verify token 
        const { userId } = jwt.verify(token, process.env.APP_SECRET);

        // assign req
        req.user = { userId };

        return next();
    } catch (error) {
        req.user = null;
        return next();
    }

    
    
}