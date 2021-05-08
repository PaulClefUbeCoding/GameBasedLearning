var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
console.log("Hello this is the start of the webpage");
    res.render("index");
});

module.exports = router;