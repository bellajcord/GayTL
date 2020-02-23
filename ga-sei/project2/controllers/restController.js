// Step 1 import express

const express = require('express')

// Step 2 Import the api files from the models

const restApi = require('../models/rest.js')

// Step 3  Create a new router.
 
const restRouter = express.Router()

// Step 4 TODO: Put all request handlers here
 
//a GET index route that sends all restaurant to rest/index.hbs
restRouter.get('/rest', (req, res) => {
  restApi.find().then(rest => {
    console.log(health);
    res.render('rest/rest', {rest})
  });
});

// a get route that shows newRest.hbs
restRouter.get('/rest/newRest', (req, res) => {
  res.render('rest/newRest')
});

//show route to render rest 
restRouter.get('/rest/:restId', (req, res) => {
  restApi.getRestById(req.params.restId).then(rest => {
    res.render('rest/singleRest', {rest})
  });
});

//edit 
restRouter.get('/rest/:restId/edit', (req, res) => {
  restApi.getRestById(req.params.restId)
});

//createe

restRouter.post('/rest', (req, res) => {
  restApi.addNewRest(req.body)
  .then(() => {
    res.redirect('/rest')
  });
});

//delete

restRouter.delete('/:restId', (req, res) => {
  restApi.deleteRest(req.params.restId)
  .then(() => {
    res.redirect('/rest')
  });
});



// Step 6 Export the router from the file.

module.exports = {
  restRouter
}