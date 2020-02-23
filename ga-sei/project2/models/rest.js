const mongoose = require('./connection.js');

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

//export the schema
let restCollection = mongoose.model('Rest', restSchema)

//function to het all restaurants

function getAllRest() {
    return restCollection.find()
}

//get a single rest by id

function getRestById(restID) {
    return restCollection.findById({_id: issueId})
}

