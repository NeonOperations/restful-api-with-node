let express = require('express');
let passport = require('passport');
let API      = require('../src/server/api/SecurePrxoyAPI');

function validateToken(token) {
    let ret = false;
    if (token) {
        API.ValidateToken(token,false)
    }
    return ret;
}

module.exports = (app) => {

    app.get('/', (req, res) => {

        let token = req.session.token;

        API.Id.ValidateToken(token,false, (isValid) =>{
            if (isValid === true) {
                let username = API.Id.GetUserFromTokenSync(token);
                res.render('index', {message: 'Welcome:', username : username, token : token});
            } else {
                res.render('logon',{message: 'No token, please Logon'});
            }
        });


    });

};
