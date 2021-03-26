const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cureSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    cure: {
        type: String,
        required: true
    }
}, {
    timestamps: true

});

var Cures = mongoose.model('Cures', cureSchema);

module.exports = Cures;