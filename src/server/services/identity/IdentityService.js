const passport = require('passport');
const Strategy = require('passport-local').Strategy;

const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

const uuid = require("../../../shared/utils/uuid");


function Error(errorMessage, errorCode, originalMessage, stackTrace) {
    this.error_code = errorCode;
    this.original_message = originalMessage;
    this.stack_trace = stackTrace;
}


// user database
let records = [
    {id: 1, username: 'neon',  password: 'neon', displayName: 'Neon', emails: [{value: 'neon@neon.com'}]},
    {id: 2, username: 'admin', password: 'admin', displayName: 'Admin', emails: [{value: 'admin@neon.com'}]},
    {id: 3, username: 'dstjohn', password: 'dstjohn', displayName: 'dstjohn', emails: [{value: 'dstjohn@battelleecology.org'}]}
];


let activeToken = {};

removeExpiredToken = () => {

    //  TODO : cofig file expiresInActiveTokensInterval
    let expiresInActiveTokensInterval = 30 * 60 * 1000;
    setInterval(
        // run
        () => {
            let now = new Date();
            console.log("remove stale token " + now);
            // find expired
            let expired = Object.keys(activeToken).filter((e) => {
                return (now.getMilliseconds() - activeToken[e].last_activity.getMilliseconds()) > expiresInActiveTokensInterval;
            });
            // remove expired
            expired.forEach((e) => {
                console.log("remove token " + e.token);
                delete activeToken[e];
            })
        },
        // interval
        10 * 60 * 1000);
};

removeExpiredToken();


/**
 * Finds the user by id
 *
 * @param id : the primary key
 * @param callback : client supplied callback
 */
findById = function (id, callback) {

    /*
     * called process.nextTick() realtime defer the execution of a
     * function until the next Event Loop Iteration.
     */
    //process.nextTick(function () {

        let idx = id - 1;

        if (records[idx]) {

            callback(null, records[idx]);

        } else {

            callback(new Error('User ' + id + ' does not exist'));
        }
    //});
};

/**
 * Find user by username
 *
 * @param username
 * @param callback : client supplied callback
 */
findByUsername = function (username, callback) {

       let rec = records.filter( (r) => {
            return r.username === username
        });
        return callback(null, rec.length >  0 ? rec[0] :undefined);

};


passport.use(new Strategy(function (username, clearTextPassword, callback) {

    findByUsername(username, function (err, user) {

        if (err) {
            return callback(err);
        }
        if (!user) {
            return callback(null, false);
        }
        if (user.password != clearTextPassword) {
            return callback(null, false);
        }
        return callback(null, user);
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

let authenticate = (username, clearTextPassword, callback) => {

    let req = {body: {username: username, password: clearTextPassword}};

    passport.authenticate('local', {session: false}, (err, user, info) => {

        let error;
        if (err)
            error = new Error(err.message);
        else if (!user)
            error = new Error(info.message);

        callback(error);

    })(req);
};
module.exports.Authenticate = authenticate;



let requestToken = (username, clearTextPassword,callback) => {
    authenticate(username, clearTextPassword, function (err) {
        let response = {};
        if (!err) {
            response.success = true;
            if (activeToken[username]) {
                response.payload = {token: activeToken[username].token};
            } else {

                let token = uuid.getUUID();
                response.success = true;
                response.payload = {token: token};
                activeToken[username] = {
                    username: username,
                    token: token,
                    create_data: new Date(),
                    last_activity: new Date()
                }
            }
        }
        else {
            response.success = false;
            response.error = err;
        }
        callback(response);
    });
};
module.exports.RequestToken = requestToken;

const validateToken = (token,callback) => {
    let keys = Object.keys(activeToken);
    let isValid = false;
    for (let key of keys) {
        let entry = activeToken[key];
        let _token = entry.token;
        if (token === _token) {
            isValid = true;
            break;
        }
    }
    callback(isValid);
};
module.exports.ValidateToken = validateToken;


let revokeUser = (username, callback) => {

    if (activeToken[username]) {
        delete activeToken[username];
    }
   callback({success: true})

};
module.exports.RevokeUser = revokeUser;



let revokeToken = (token, callback) => {

    let isSuccess = false;

    let keys = Object.keys(activeToken);
    let isValid = false;
    for (let key of keys) {
        let entry = activeToken[key];
        if ( entry) {
            delete activeToken[key];
            isSuccess = true;
        }
        break;
    }


    callback({success: isSuccess})
};
module.exports.RevokeToken = revokeToken;


const userFromTokenSync = (token,callback) => {

    const keys = Object.keys(activeToken);
    let username = undefined;
    let e = undefined;
    for (let key of keys) {
        let entry = activeToken[key];
        e = entry;

        if (entry.token === token) {
            username = entry.username;
            break;
        }
    }
    return username;
}
module.exports.GetUserFromTokenSync = userFromTokenSync;

const userFromToken = (token,callback) => {

    const keys = Object.keys(activeToken);
    let isSuccess = false;
    console.log(token);
    console.log(keys);

    let username = undefined;
    let e = undefined;
    for (let key of keys) {
        let entry = activeToken[key];
        e = entry;
        if (entry.token === token) {

            username = entry.username;
            isSuccess = true;
            break;
        }
    }
    callback({
        success: isSuccess,
        payload: {
            entry: e,
            username: username,
            token: token
        }
    });
};
module.exports.GetUserFromToken = userFromToken;

module.exports.ActiveToken = activeToken;

module.exports.service = new RestServiceFactory("Identity",
    [
        new RestEndpoint('POST', '/requesttoken', (req, res) => {
            let response = res;
            let txtBody = req.body;
            let body = JSON.parse(txtBody);
            let username = body.username;
            let clearTextPassword = body.password;
            requestToken(username,clearTextPassword,(response)=>{
                res.json(response);
            });
        }),
        new RestEndpoint('POST', '/validatetoken', (req, res) => {
                let token = JSON.parse(req.body).token;
                validateToken(token,(isValid)=>{
                    res.json({success: true, payload: {isValid: isValid}});
                });
        }),
        new RestEndpoint('POST', '/revoketoken', (req, res) => {
            let body = JSON.parse(req.body);
            let token = body.token;
            revokeToken(token, (response)=>{
                res.json(response);
            });
        }),
        new RestEndpoint('POST', '/revokeuser', (req, res) => {
            let username = req.body.username;
            revokeUser(username,(response)=>{
                res.json(response);
            });
        }),
        new RestEndpoint('POST', '/userfromtoken',(req, res) => {
            let body = JSON.parse(req.body);
            const token = body.token;
            userFromToken(token,(response)=>{
                res.json(response);
            })
        })
    ]
);

module.exports.start = (port) => {
    console.log("Identity service started on " + port);
    module.exports.service.start(port);
};