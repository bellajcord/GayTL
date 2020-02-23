// Step 1 import express

const express = require('express')

// Step 2 Import the api files from the models

const restApi = require('../models/rest.js')

// Step 3  Create a new router.
 
const restRouter = express.Router()

// Step 4 TODO: Put all request handlers here
 
//a GET index route that sends all restaurant to rest/index.hbs
restRouter.get('/', (req, res) => {
  restApi.find().then(rest => {
    console.log(health);
    res.render('rest/rest', {rest})
  });
});

// a get route that shows newRest.hbs
restRouter.get('/newRest' (req, res) => {
  res.render('rest/newRest')
});


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  restRouter
}