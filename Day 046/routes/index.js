const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    const data = {
        name: "Home"
    };
    //res.send("This is my first rout with node + express");
    res.render('index', data)
});

module.exports = router;