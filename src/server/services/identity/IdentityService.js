const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

const uuid = require("../../../shared/utils/uuid");


function Error(errorMessage, errorCode, originalMessage, stackTrace){
    this.error_code = errorCode;
    this.original_message = originalMessage;
    this.stack_trace = stackTrace;
}

// user database
let records = [
    { id: 1, username: 'neon', password: 'neon', displayName: 'Neon', emails: [ { value: 'neon@neon.com' } ] } ,
    { id: 2, username: 'admin', password: 'admin', displayName: 'Admin', emails: [ { value: 'admin@neon.com' } ] }
];


let activeToken = {};

findById = function(id, cb) {

    process.nextTick(function() {

        var idx = id - 1;

        if (records[idx]) {

            cb(null, records[idx]);

        } else {

            cb(new Error('User ' + id + ' does not exist'));
        }
    });
};

findByUsername = function(username, cb) {

    process.nextTick(function() {

        for (var i = 0, len = records.length; i < len; i++) {

            var record = records[i];

            if (record.username === username) {

                return cb(null, record);
            }
        }
        return cb(null, null);
    });
};


passport.use(new Strategy( function (username, password, cb) {

        findByUsername(username, function (err, user) {

            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    }));

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
    db.users.findById(id, function (err, user) {
        if (err) {
            return cb(err);
        }
        cb(null, user);
    });
});


let authenticate =  (username, clearTextPassword, callback) => {

    let req = {body: {username: username, password: clearTextPassword}};

    passport.authenticate('local', {session: false},(err, user, info) =>{

        let error;
        if(err)
            error = new Error(err.message);
        else if(!user)
            error = new Error(info.message);

        callback(error);

    })(req);
};
module.exports.Authenticate = authenticate;


let requestToken = (req, res) => {

    let txtBody = req.body;
    let body = JSON.parse(txtBody);
    let username = body.username;
    let clearTextPassword =  body.password;

    authenticate(username, clearTextPassword, function(err) {

        let response= {};

        if(!err){

            let token = uuid.getUUID();
            response.success = true;
            response.payload = { token : token};
            activeToken [username] = {
                token : token,
                create_data :new Date(),
                last_activity : new Date()
            }

        }else {
            response.success = false;
            response.error = err;
        }

        res.json(response);
    });
};
module.exports.RequestToken = requestToken;

let validateToken = (req, res) => {

    let token = req.body.token;

    let keys = Object.keys(activeToken);

    let isValid = false;
    for ( let key in keys){
        let entry = activeToken[key];
        let _token = entry.token;
        if ( token === _token ){
            isValid = true;
            break;
        }
    }
    req.json({success : true, payload : { isValid : isValid}});

};
module.exports.ValidateToken = validateToken;

let revokeUser = (req, res) => {

    if ( activeToken.hasOwnProperty(req.body.username)){
        activeToken.removeProperty(req.body.username);
    }
    req.json({success : true})
};
module.exports.RevokeUser = revokeUser;


let revokeToken = (req, res) => {;

    let token = req.body.token;
    let keys = Object.keys(activeToken);
    let isSuccess = false;

    for ( let index = 0; index.keys.length; index++) {
            let entry = activeToken[key];
            if ( entry.token === token){
                activeToken.removeProperty(key);
                isSuccess = true;
                break;
            }
    }

    req.json({success : isSuccess})
};
module.exports.RevokeToken = revokeToken;

let userFromToken = (req, res) => {;

    let token = req.body.token;
    let keys = Object.keys(activeToken);
    let isSuccess = false;

    let usename = undefined;
    for ( let index = 0; index.keys.length; index++) {
        let entry = activeToken[key];
        if ( entry.token === token){
            usename = entry.username;
            isSuccess = true;
            break;
        }
    }

    req.json({
        success : isSuccess,
        payload : {
            username : username,
            token : toekn}
         });
};
module.exports.GetUserFromToken = userFromToken;

module.exports.service = new RestServiceFactory("Identity",
    [
        new RestEndpoint('POST', '/requesttoken', requestToken),
        new RestEndpoint('POST', '/validatetoken', validateToken),
        new RestEndpoint('POST', '/revoketoken', revokeToken),
        new RestEndpoint('POST', '/revokeuser', revokeUser),
        new RestEndpoint('POST', '/usertotoken', userFromToken)
    ]
);

module.exports.start = (port) => {
    console.log("Identity service started on " + port);
    module.exports.service.start(port);
};