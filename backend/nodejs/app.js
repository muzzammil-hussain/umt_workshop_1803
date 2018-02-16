var express = require("express");
	bodyParser = require("body-parser");
	db = require("./db.js");
	app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


app.get("/depts/", function(req, res) {
    res.status(200).send(db.depts());
})

app.get("/all/", function(req, res) {
    res.status(200).send(db.all());
})

app.get("/search/:attrib/:value/", function(req, res) {
    res.status(200).send(db.search(req.params.attrib, req.params.value));
})

app.get("/view/:id/", function(req, res) {
    res.status(200).send(db.view(req.params.id));
})

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
})