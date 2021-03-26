const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')


const User = new Schema({
    firstname: {
        type: String,
        default: ""
    },
    lastname: {
        type: String,
        default: ""
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        // 0 - male, 1 - female
        type: Boolean
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    doctor: {
        type: Boolean,
        default: false
    },
    profile_pic: {
        type: String,
        default: ""
    },
    contact_num: {
        type: String,
        required: true,
        maxlength: 10,
        minlength: 10
    }
});


// var Users = mongoose.model('Users', userSchema);
User.plugin(passportLocalMongoose);


module.exports = mongoose.model('User', User);