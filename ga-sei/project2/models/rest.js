const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const restSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    img: String,

});

module.exports = mongoose.model('rest', restSchema);
