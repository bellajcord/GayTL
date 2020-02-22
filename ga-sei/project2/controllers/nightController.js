/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const nightApi = require('../models/night.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const nightRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 

//get all night life data and route to night/index
nightRouter.get('/', (req, res) => {
  nightApi.find().then(night => {
    console.log(night);
    res.render('night/index', {night})
  });
});

//index route that creates new nightlife
nightRouter.post('/index', (req, res) => { 
  nightApi.create(req.body).then(() => {
    res.redirect('/');
  });
});

//a route /newNight that renders the newNight.hbs form
nightRouter.get('/newNight', (req, res) => {
  res.render('night/newNight');
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  nightRouter
}