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
const restApi = require('../models/rest.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const restRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
//a GET index route that sends all restaurant to rest/index.hbs
restRouter.get('/', (req, res) => {
  restApi.find().then(rest => {
    console.log(health);
    res.render('rest/restHealth', {rest})
  });
});

//index route that creates new restaurant
restRouter.post('/index', (req, res) => { 
  restApi.create(req.body).then(() => {
    res.redirect('/');
  });
});

//a route /newRest that renders the newRest.hbs form
restRouter.get('/newRest', (req, res) => {
  res.render('rest/newRest');
});
/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  restRouter
}