const express = require('express');
// Initialize app
const router = express.Router();
// Load models
const User = require('../models/User');

// GET ALL users
router.get('/users', function(req, res){
    let users = User.find({}, function(err, users){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else {
            res.json(users);
        }
    })
})

// GET SINGLE user
router.get('/users/:id', function(req, res){
    User.findById(req.params.id, function(err, user){
        res.json(user);
    });
});

// ADD user
router.post('/users/add', function (req, res) {

    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.job = req.body.job;
    user.company = req.body.company;
    user.age = req.body.age;
    user.city = req.body.city;

    user.save(function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
        }
        else{
            res.json(user)
        }
    });
});

// UPDATE user
router.post('/users/update/:id', function (req, res) {

    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            user.name = req.body.name;
            user.email = req.body.email;
            user.phone = req.body.phone;
            user.job = req.body.job;
            user.company = req.body.company;
            user.age = req.body.age;
            user.city = req.body.city;
    
            user.save().then(user => {
                res.json({msg: "success"})
            })
            .catch(err => {
                res.json({msg: "falied"});
            });
        }
    });
});

// DELETE user
router.post('/users/delete/:id', function (req, res) {
    let query = { _id: req.params.id }

    User.findByIdAndDelete(query, function(err){
        if(err){
            console.log(err);
            res.json({msg: "failed"})
            return;
        }
        else{
            res.json({msg: "success"})
        }
    });
});

module.exports = router;
