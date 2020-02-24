// Step 1 import express

const express = require("express");

// Step 2 Import the api files from the models

const Night = require("../models/night");

// Step 3  Create a new router.

const nightRouter = express.Router();

/* Step 4
 *
 * TODO: Put all request handlers here
 */



//a GET index route that sends all restaurant to rest/index.hbs
nightRouter.get("/", (req, res) => {
  Night.find().then(nights => {
    res.render("Night/index", { nights });
  });
});

// a get route that shows new.hbs
nightRouter.get("/new", (req, res) => {
  res.render("Night/new");
});

//show route to render night by Id
nightRouter.get("/:nightId", (req, res) => {
  Night.findById(req.params.nightId).then(nights => {
    res.render("Night/show", { nights });
  });
});

//edit
nightRouter.get("/:nightId/edit", (req, res) => {
  Night.findById(req.params.nightId);
});

//createe

nightRouter.post("/", (req, res) => {
  Night.create(req.body).then(() => {
    res.redirect("/night");
  });
});

//delete

nightRouter.delete("/:nightId", (req, res) => {
  Night.findByIdAndRemove(req.params.nightId).then(() => {
    res.redirect("/night");
  });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  nightRouter
};
