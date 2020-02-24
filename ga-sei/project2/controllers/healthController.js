// Step 1 import express
 
const express = require('express')

// Step 2 Import the api files from the models
 
const Health = require('../models/health.js')

// Step 3  Create a new router.
 
const healthRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

//a GET index route that sends all restaurant to rest/index.hbs
healthRouter.get("/", (req, res) => {
  Health.find().then(healths => {
    res.render('Health/index', {healths})
  });
});

// a get route that shows new.hbs
healthRouter.get("/new", (req, res) => {
  res.render('Health/new')
});

//show route to render rest 
healthRouter.get("/:healthId", (req, res) => {
  Health.findById(req.params.healthId).then(healths => {
    res.render('Health/show', {healths})
  });
});

//edit 
healthRouter.get("/:healthId/edit", (req, res) => {
  Health.findById(req.params.healthId)
});

//createe

healthRouter.post('/', (req, res) => {
  Health.create(req.body)
  .then(() => {
    res.redirect('/health')
  });
});

//delete

healthRouter.delete('/:healthId', (req, res) => {
  Health.findByIdAndRemove(req.params.healthId)
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