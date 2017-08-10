let express = require('express');
let passport = require('passport');

module.exports = (app) => {

    app.get('/logon', (req, res, next) => {

        let dataMode = {
            role: 'admin'
        };

        res.render('logon', dataMode);
    });

    app.post('/logon',function (req, res) {
            res.redirect('/');
        });

}
