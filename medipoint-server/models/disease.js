const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diseaseSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    info: {
        type: String,
        required: true
    }
}, {
    timestamps: true

});

var Diseases = mongoose.model('Diseases', diseaseSchema);

module.exports = Diseases;