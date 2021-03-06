/**
 * Created by lvlq on 16/1/7.
 */
var shareContentMid = require("../mid/sharecontent");
var express = require("express");
var router = express.Router();
var wxshare = require("../mid/wxshare");
router.get('/*', require("../mid/wxfilter"));
router.use("/common", require("./common"));
router.get("/*", wxshare());
router.get("/*", shareContentMid());
router.get("/*", function (req, res, next) {
    res.locals.title = "123";
    next();
});

router.get("/setsession", function (req, res) {
    req.session.a = {
        b: 3
    };
    res.send("success");
});

router.get("/getsession", function (req, res) {
    res.json({
        id: req.session.id,
        session: req.session
    });
});

router.get("/index", function (req, res) {
    console.log(req.ip);
    console.log(req.port);
    console.log(req.hostname);
    console.log(req.protocol);
    console.log(req.domain);
    console.log(req.href);
    res.render("index.html");
});

// router.get("/test", function (req, res) {
//     res.render("test.html", {data: {a: 1, b: [1, 2, 3, 4]}});
// });

router.use("/test", require("./test"));
router.use("/oauth", require("../mid/oauth"));
router.get("/oauth", function (req, res) {
    res.json({a: 1});
});

router.use("/map", require("./map"));

module.exports = router;