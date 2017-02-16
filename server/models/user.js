const mongoose = require('mongoose');
const validator = require('validator');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type:String,
            required: true
        },
        token: {
            type: String,
            required:true
        }
    }]
});

UserSchema.methods.generateAuthToken = funtion () {
 var user = this;
 var access = 'auth';
 var token
};

var User = mongoose.model('User', UserSchema);

module.exports = { User };