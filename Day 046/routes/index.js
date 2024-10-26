const express = require('express');
const router = express.Router();

let user = null;

const profiles = {
    { name: "Zezin", city: "Juiz de Fora", profession: "Dev" },
    { name: "Pedrin", city: "Petropolis" },
    { name: "Jorgin", city: "Sao Tome das Letras", profession: "UX" },
};

router.get('/', (req, res, next) => {
    const data = {
        name: "Home",
        date: req.timestamp,
        profiles: profiles,
        user: user
    };
    //res.send("This is my first rout with node + express");
    res.render('index', data);
});

router.get('/login', (req, res, next) => {
    res.render('login', null);
})

router.get("/error", (req, res, next) => {
    const data = {
        message: 'Login failed! Check your username and password...'
    }
    res.render("error", data);
})

router.post("/job," (req, res, next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
});

router.post('/login', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    if(password === '123') {
        user = {username: username}
        res.redirect('/');
        return;
    } else {
        res.redirect('/error');
    }

    /*if(password === '123') {
        user = {username: username}
        res.redirect('/');
        return;
    } else {
        
        // In case of failure

        res.json ({
            data:"Login failed"
        })
        }*/

        res.json ({
            data: req.body
        })

    res.render('index', data)
})

router.post('/join', (req, res, next) => {
    const body = req.body;
    profiles.push(body);

    res.redirect('/');
});

module.exports = router;