// Step 1 import express

const express = require('express')

// Step 2 Import the api files from the models

const Rest = require('../models/rest.js')

// Step 3  Create a new router.
 
const restRouter = express.Router()

// Step 4 TODO: Put all request handlers here
 
//a GET index route that sends all restaurant to rest/index.hbs
restRouter.get('/', (req, res) => {
  Rest.find().then(rests => {
    res.render('Rest/index', {rests})
  });
});

// a get route that shows new.hbs
restRouter.get("/new", (req, res) => {
  res.render("Rest/new");
});

//show route to render rest 
restRouter.get("/:restId", (req, res) => {
  Rest.findById(req.params.restId).then(rests => {
    res.render('Rest/show', {rests})
  });
});

//edit 
restRouter.get('/:restId/edit', (req, res) => {
  Rest.findById(req.params.restId);
});

//createe

restRouter.post('/', (req, res) => {
  Rest.create(req.body)
  .then(() => {
    res.redirect('/rest')
  });
});

//delete

restRouter.delete('/:restId', (req, res) => {
  Rest.findByIdAndRemove(req.params.restId)
  .then(() => {
    res.redirect('/rest')
  });
});



// Step 6 Export the router from the file.

module.exports = {
  restRouter
}