const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    hospital: {
        type: String,
        default: ""
    },
    designation: {
        type: String,
        default: ""
    }
    // ,
    // available_timings: {
    //     type: [{
    //         time: {
    //             type: String
    //         }
    //     }]
    // }
}, {
    timestamps: true

});

var Doctors = mongoose.model('Doctors', doctorSchema);

module.exports = Doctors;