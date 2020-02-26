let Rest = require('../models/rest.js')


let newRest = [
    {
        name: 'test',
        description: 'test',
        locatino: 'test',
        img: 'test'
    }
]

Rest.remove({})
    .then (
        Rest.create(newRest).then (() => {
            console.log('Data Done Seeding')
        }))