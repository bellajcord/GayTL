const mongoose = require('./connection');

const  Schema  = mongoose.Schema;

const Rest = new Schema({
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



//export created functions
module.exports = mongoose.model('Rest', Rest)