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
        return next(error);
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            // Error Email incorrect
            const err = new Error('Email is incorrect!');
            err.statusCode = 400;
            return next(err);
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
            // Error wrong password
            const err = new Error('Wrong password!');
            err.statusCode = 400;
            return next(err);
        }
    } catch (error) {
        return next(error);
    }
}

// Get current user 
exports.getCurrentUser = async (req, res, next) => {
    try {
        const data = { user: null };
        if (req.user) {
            const user = await User.findOne({ _id: req.user.userId });
            data.user = { userName: user.name };
        }
        res.status(200).json({
            status: 'success',
            data: data
        });
    } catch (error) {
        res.json(error);
    }
}