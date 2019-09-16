var express = require('express');

var HTML = require("./app/routing/htmlRoutes");
var API = reguire("./app/routing/apiRoutes");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(HTML);
app.use(API);

app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});

