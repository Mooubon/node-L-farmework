/**
 * Created by lvlq on 16/8/9.
 */
var router = require("express").Router();

router.get("/index", function (req, res) {
    res.render("weixin/func/default/index.html");
});

module.exports = router;