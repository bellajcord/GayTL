const mongoose = require('./connection.js');

const  Schema  = mongoose.Schema;

const nightSchema = new Schema({
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
let nightCollection = mongoose.model('Night', nightSchema)

//function to get all nightlife

function getAllNight() {
    return nightCollection.find()
}

//get a single night by id

function getNightById(nightId) {
    return nightCollection.findById({_id: nightId})
}

//function to create new night
function addNewNight(night) {
    return nightCollection.create(night)
}

//update night
function updateNight(nightId, night) {
    return nightCollection.updateOne({_id: nightId}, night)
}

//delete night
function deleteNight(nightId) {
    return nightCollection.deleteOne({_id: nightId})
}

//export created functions
module.exports = {
    getAllNight,
    getNightById,
    addNightRest,
    updateNight,
    deleteNight
}