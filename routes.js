var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
console.log("Hello this is the start of the webpage");
    res.render("index");
});
router.get("/frontpage", function(req,res){
    console.log("Hello this is the start of returning to the main page");
        res.render("frontpage");
});
router.get("/description", function(req,res){
    console.log("Hello this is the start of the description");
        res.render("description");
});
router.get("/gameexample", function(req,res){
    console.log("Hello this is goes to the game example page");
        res.render("gameexample");
});

module.exports = router;