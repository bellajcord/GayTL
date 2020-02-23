// Step 1 import express
 
const express = require('express')

// Step 2 Import the api files from the models
 
const healthApi = require('../models/health.js')

// Step 3  Create a new router.
 
const healthRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//a GET index route that sends all restaurant to rest/index.hbs
healthRouter.get('/health', (req, res) => {
  healthApi.find().then(health => {
    console.log(health);
    res.render('health/health', {health})
  });
});

// a get route that shows newRest.hbs
healthRouter.get('/health/newHealth', (req, res) => {
  res.render('health/newHealth')
});

//show route to render rest 
healthRouter.get('/health/:healthId', (req, res) => {
  healthApi.getHealthById(req.params.healthId).then(health => {
    res.render('health/singleHealth', {health})
  });
});

//edit 
healthRouter.get('/health/:healthId/edit', (req, res) => {
  healthApi.getHealthById(req.params.healthId)
});

//createe

healthRouter.post('/health', (req, res) => {
  healthApi.addNewHealth(req.body)
  .then(() => {
    res.redirect('/health')
  });
});

//delete

healthRouter.delete('/:healthId', (req, res) => {
  healthApi.deleteHealth(req.params.healthId)
  .then(() => {
    res.redirect('/health')
  });
});


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  healthRouter
}