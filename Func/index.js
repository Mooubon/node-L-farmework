/**
 * Created by lvlq on 16/8/7.
 */
var express = require("express");
var routes = require("./Lib/index");
var app = express();
app.set("views", __dirname + "/Tpl");
app.engine('html', require('ejs').renderFile);
app.set("name", "Admin");
var morgan = require('morgan');
app.use(morgan('tiny'));
//do yourself ...
app.use(function (req, res, next) {
    res.locals.title = "Func";
    next();
});
app.use("/", routes);
app.use("/", function (req, res) {
    res.send("404");
});
module.exports = app;