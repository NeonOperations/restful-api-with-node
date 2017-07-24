let express = require('express');
let passport = require('passport');

module.exports = (app) => {

    app.get('/', (req, res, next) => {
        res.render('index', { title: 'Express' });
    });

};