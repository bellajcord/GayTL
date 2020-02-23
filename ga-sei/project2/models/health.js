const mongoose = require('./connection.js');

const  Schema  = mongoose.Schema;

const healthSchema = new Schema({
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
let healthCollection = mongoose.model('Health', healthSchema)

//function to het all health

function getAllHealth() {
    return healthCollection.find()
}

//get a single health by id

function getHealthById(healthID) {
    return healthCollection.findById({_id: healthId})
}

//function to create new health
function addNewHealth(health) {
    return healthCollection.create(health)
}

//update health
function updateHealth(healthId, health) {
    return healthCollection.updateOne({_id: healthId}, health)
}

//delete health
function deleteHealth(healthId) {
    return healthCollection.deleteOne({_id: healthId})
}

//export created functions
module.exports = {
    getAllHealth,
    getHealthById,
    addNewHealth,
    updateHealth,
    deleteHealth
}