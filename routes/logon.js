let express  = require('express');
let passport = require('passport');
let api      = require('../src/server/api/SecurePrxoyAPI');


module.exports = (app) => {

    app.get('/logon', (req, res) => {

        let dataMode = {
            role: 'admin'
        };

        res.render('logon', dataMode);
    });

    app.post('/logon',function (req, res) {

            let username = req.body.username;

            let password = req.body.password;

            api.Identity.RequestToken(username,password,(ret)=>{

                if (ret.success === true){
                    req.session.token = ret.payload.token;
                }
                res.redirect('/');

            });

        });

}
