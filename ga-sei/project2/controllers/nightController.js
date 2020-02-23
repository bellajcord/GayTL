// Step 1 import express
 
const express = require('express')

// Step 2 Import the api files from the models
 
const nightApi = require('../models/night.js')

// Step 3  Create a new router.
 
const nightRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */


//a GET index route that sends all restaurant to rest/index.hbs
nightRouter.get('/night', (req, res) => {
  nightApi.find().then(night => {
    console.log(night);
    res.render('night/night', {night})
  });
});

// a get route that shows newRest.hbs
nightRouter.get('/night/newNight', (req, res) => {
  res.render('night/newNight')
});

//show route to render rest 
nightRouter.get('/night/:nightId', (req, res) => {
  nightApi.getNightById(req.params.nightId).then(night => {
    res.render('night/singleNight', {night})
  });
});

//edit 
nightRouter.get('/night/:nightId/edit', (req, res) => {
  nightApi.getNightById(req.params.nightId)
});

//createe

nightRouter.post('/night', (req, res) => {
  nightApi.addNewNight(req.body)
  .then(() => {
    res.redirect('/night')
  });
});

//delete

nightRouter.delete('/:nightId', (req, res) => {
  nightApi.deleteNight(req.params.nightId)
  .then(() => {
    res.redirect('/night')
  });
});


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  nightRouter
}