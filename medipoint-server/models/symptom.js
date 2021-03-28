const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const symptomSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true

});

var Symptoms = mongoose.model('Symptoms', symptomSchema);

module.exports = Symptoms;