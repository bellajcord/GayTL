const mongoose = require('./connection');

const  Schema  = mongoose.Schema;

const Night = new Schema({
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



//export the schema


//function to get all nightlife



//export created functions
module.exports = mongoose.model('Night', Night)