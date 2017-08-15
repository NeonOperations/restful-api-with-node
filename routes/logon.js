let express  = require('express');
let passport = require('passport');
let API = require('../src/server/api/SecurePrxoyAPI');


module.exports = (app) => {


    app.get('/logon', (req, res) => {

        let dataMode = {
            role: 'admin'
        };
        res.render('logon', dataMode);
    });


    // app.post('/logon',function (req, res) {
    //
    //         let username = req.body.username;
    //
    //         let password = req.body.password;
    //
    //         API.Id.RequestToken(username,password,false,(ret)=>{
    //
    //             try {
    //                 if (ret.success === true) {
    //                     let token = ret.payload.token;
    //                     req.session.token = token;
    //                     let username = API.Id.GetUserFromTokenSync(token);
    //                     res.render('test', {message: 'Welcome:', username: username, token: token});
    //                 } else {
    //                     res.render('logon');
    //                 }
    //             }catch(x){
    //                 res.json( x );
    //             }
    //
    //         });
    //
    //     });


    app.get('/logout', (req, res) => {

        delete req.session.token;

        req.session.destroy();

        res.render('logon');
    });

    app.get('/test', (req, res) => {

        res.render('test', {message: 'Welcome:', username: 'no user .. ', token: '123...'});
    });

}
