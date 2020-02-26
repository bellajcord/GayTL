const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
    res.render("Home/home")
})

module.exports = {
    homeRouter
}