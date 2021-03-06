/**
 * Created by lvlq on 16/1/6.
 */

var port = process.env.NODE_PORT || 18080;
require("./Farmework");
global.Models = require("./Farmework/models/models");
var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var config = Config();
var app = express();

app.use("/Public", require("./Public"));
app.use(bodyParser.urlencoded({extended: true}));
var sessionStore = null;
if (config.session_store) {
    if (config.session_store_type == "redis") {
        sessionStore = new RedisStore({
            host: config.session_store_host,
            port: config.session_store_port,
            ttl: config.session_store_ttl
        });
    }
}

app.use(session({
    secret: 'qwertyuiop',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    name: "llq_sid"
}));

app.use(Mid("sessionCheck"));
app.use(Mid("noCache"));
app.use(Mid("ip"));
app.use(Mid("resReturn"));
app.use("/index", require("./Index"));
app.use("/admin", require("./Admin"));
app.use("/weixin", require("./Weixin"));
app.use("/func", require("./Func"));
app.use("/service", require("./Service"));
// var env = process.env.NODE_ENV || 'development';

// if (env == 'dev') {
//     var webpack = require('webpack');
//     var webpack_config = require('./webpack.config.dev');
//     var compiler = webpack(webpack_config);
//     app.use(require('webpack-dev-middleware')(compiler, {
//         publicPath: webpack_config.output.publicPath,
//         stats: {
//             colors: true
//         }
//     }));
//
//     app.use(require('webpack-hot-middleware')(compiler, {}));
// }

app.listen(port);
console.log("监听端口:" + port);