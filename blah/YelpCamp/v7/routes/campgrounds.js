var express = require("express"),
    router  = express.Router();

var Campground = require("../models/campground");

// INDEX ROUTE
router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
            // how come req.user is passed to a get route????
        }
    });
});

// CREATE ROUTE
router.post("/", function(req, res){
    var newCampground = {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description
    };
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

// NEW ROUTE
router.get("/new", function(req, res){
    res.render("campgrounds/new");
});

// SHOW ROUTE
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

module.exports = router;
