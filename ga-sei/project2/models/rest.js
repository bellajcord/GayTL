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

function getRestById(restId) {
    return restCollection.findById({_id: restId})
}

//function to create new rest
function addNewRest(rest) {
    return restCollection.create(rest)
}

//update rest
function updateRest(restId, rest) {
    return restCollection.updateOne({_id: restId}, rest)
}

//delete rest
function deleteRest(restId) {
    return restCollection.deleteOne({_id: restId})
}

//export created functions
module.exports = {
    getAllRest,
    getRestById,
    addNewRest,
    updateRest,
    deleteRest
}