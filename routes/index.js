let express = require('express');
let passport = require('passport');

function validateToken(token) {
    let ret = false;
    if (token) {
    }
    return ret;
}

module.exports = (app) => {

    app.get('/', (req, res, next) => {

        let token = req.session.token;

        if (validateToken(token)) {
            res.render('index', {title: 'Express'});
        } else {
            res.redirect('/logon');
        }
    });

};
