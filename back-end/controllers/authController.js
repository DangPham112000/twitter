const User = require("../models/User");
const jwt = require('jsonwebtoken');
const bcript = require('bcryptjs');

exports.register = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);

        res.status(200).json({
            status: 'success',
            data: { 
                token, 
                userName: user.name 
            }
        })
    } catch (error) {
        res.json(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            // error khong co user
        }
        if (bcript.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({userId: user._id}, process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data: {
                    token,
                    userName: user.name
                }
            })
        } else {
            // sai mat khau
        }
    } catch (error) {
        res.json(error);
    }
}