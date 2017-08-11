const Uuid = require('../services/uuid/UUIDService');
const Identity = require('../services/identity/IdentityService');
const Perms = require('../services/permission/PermissionService');
const Proxy = require("../services/proxy/ProxyService");
const request = require('request');

let API = {

    UUID: {
        getUUID: () => {
            return Uuid.getUUID();
        }
    }
    ,
    Identity: {

        /**
         * The callback returns the
         * {
         *  success : <true|false>,
         *  payload : < undefined | { token : "string"} >,
         *  error   : < null | object>
         *  }
         * @param username
         * @param password
         * @param callback
         * @constructor
         */
        RequestToken: (username, password, callback) => {

            // TODO:  get url from config file
            let url = "http://localhost:9902/requesttoken";
            let body = {username: username, password: password};
            request.post(url, body, (ret) => {
                callback(ret);
            })
        }
        ,
        RevokeToken: (token, callback) => {
            // TODO:  get url from config file
            let url = "http://localhost:9902/revoketoken";
            request.post(url, {token: token}, (ret) => {
                callback(ret);
            })
        }
        ,
        RevokeUser: (username, callback) => {
            // TODO:  get url from config file
            let url = "http://localhost:9902/revokeuser";
            request.post(url, {username: username}, (ret) => {
                callback(ret);
            })
        },
        ValidateToken: (token, callback) => {
            // TODO:  get url from config file
            let url = "http://localhost:9902/validatetoken";
            request.post(url, {token: token}, (ret) => {
                callback(ret);
            })
        },

        GetUserFromToken(token, callback) {
            // TODO:  get url from config file
            let url = "http://localhost:9902/usertotoken";
            request.post(url, {token: token}, (ret) => {
                callback(ret);
            })
        }
    }
    ,

    Permissions: {

            CanExecute: (service, serviceName, username, method, path, callback) => {
                let url = "http://localhost:9903/requestpermission";
                request.post(url, {
                    service: service,
                    serviceName : serviceName,
                    username : username,
                    method : method,
                    path : path
                }, (ret) => {
                    callback(ret);
                })

            }
        }

    ,

    Proxy: {

        Delegate: (service, serviceName, path, url, method, payload, token, callabck) => {

            API.Permissions.CanExecute(service, serviceName, username, method, path,(results)=>{


                if ( results.success === true){

                    let data = {
                        url : url,
                        method : method,
                        payload : payload,
                        token : token
                    };

                    let url = "http://localhost:9904/proxy";
                    request.post(url, data, (ret) => {
                        callback(ret);
                    })
                }
                else {


                }
            });


        }
    }

};

module.exports = API;