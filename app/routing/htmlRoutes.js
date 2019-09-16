var path = require("path")
var express = require("express")

var app = express()

var surveyHTML = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

var homeHTML = app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = surveyHTML, homeHTML;