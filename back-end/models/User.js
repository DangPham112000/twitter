const { default: mongoose } = require("mongoose");
const bcript = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true, trim: true, required: [true, 'Name must be required!'] },
    email: { type: String, unique: true, trim: true, required: [true, 'Email must be required!'] },
    password: { type: String, unique: true, trim: true, required: [true, 'Password must be required!'], minlength: [6, 'Password must be at least 6 charactor'] }
}, { timestamps: true });

userSchema.pre('save', function(next) {
    let user = this;
    bcript.hash(user.password, 10, function(error, hash) {
        if (error) {
            return next(error);
        } else {
            user.password = hash;
            next();
        }
    })
})

const User = mongoose.model('User', userSchema);

module.exports = User;