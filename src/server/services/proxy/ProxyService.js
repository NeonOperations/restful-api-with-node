let async = require('async');

const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

let API = require('../../../server/api/SecurePrxoyAPI');
let request = require('request');
let Endpoints = {};

Endpoints['SRF'] = new Endpoint();

function Endpoint(serviceName, url, method) {
    this.serviceName = serviceName;
    this.method = method;
    this.method = method;
}

Endpoints['SRF'] = new Endpoint('SRF', 'localhost:8080/cdsWebApp/SRF');

module.exports.Endpoint = Endpoint;



securedProxy = () =>{


}
module.exports.service = new RestServiceFactory("ProxyService", [

        new RestEndpoint('POST', '/proxy', (req, res) => {

            let body = JSON.parse(req.body);

            let token = body.token;


            let service      = "ods";
            let serviceName  = "locations";
            let username     = "admin";
            let path         = body.subpath;



            let url = body.url;
            let payload = body.payload;
            let method = body.method;
            let subpath = body.subpath;

            if ( method.toUpperCase() === 'GET') {

                request.get(url, (err, body) => {
                    ret = {
                        success: true,
                        payload: body,
                        error : err
                    };
                    res.json(ret);
                })
            }



            // API.Permissions.CanExecute(service, serviceName, username, method, path, (res) => {
            //
            //     console.log(res);
            //
            //     if ( res.success === true && res.payload === true) {
            //
            //         if ( method.toUpperCase() === 'GET') {
            //
            //             request.get(url, (err, body) => {
            //                 ret = {
            //                     success: true,
            //                     payload: body,
            //                     error : err
            //                 };
            //                 res.json(ret);
            //             })
            //         }
            //         else if ( method.toUpperCase() === 'POST') {
            //
            //             request.post(url, payload , (err, body) => {
            //                 ret = {
            //                     success: true,
            //                     payload: body
            //                 };
            //                 res.json(ret);
            //             });
            //         }
            //         else if (delegatedEndpoit.method === 'PUT') {
            //
            //         }
            //         else if (delegatedEndpoit.method === 'DEL') {
            //
            //         }
            //
            //     }else {
            //
            //         res.json(res);
            //     }
            //
            //
            // });
            //

        })
    ]
);

let service = module.exports.service;


module.exports.start = (port) => {
    console.log("UUID service started on " + port);
    service.start(port);
};

