const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

// const GET  = require('../../../server/http/get');
// const POST = require('../../../server/http/post');
let request = require('request');
let Endpoints = {};

Endpoints['SRF'] = new Endpoint();

function Endpoint(serviceName, url, method) {
    this.serviceName = serviceName;
    this.method = method;
    this.method = method;
}

Endpoints['SRF'] = new Endpoint('SRF','localhost:8080/cdsWebApp/SRF');

module.exports.Endpoint = Endpoint;

module.exports.service = new RestServiceFactory("ProxyService", [

    new RestEndpoint('POST', '/proxy', (req, res) => {

                let body = JSON.parse(req.body);

                let token = body.token;
                let url = body.url;
                let payload = body.payload;
                let method = body.method;
                let subpath = body.subpath;

                try {
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
                    else if ( method.toUpperCase() === 'POST') {
                        request.post(url, payload , (err, body) => {
                            ret = {
                                success: true,
                                payload: body
                            };
                            res.json(ret);
                        });
                    }
                    else if (delegatedEndpoit.method === 'PUT') {

                    }
                    else if (delegatedEndpoit.method === 'DEL') {

                    }
                } catch (e) {
                    ret = {
                        success: true,
                        error: JSON.stringify(e)
                    };
                }

            })
    ]
);

let service = module.exports.service;


module.exports.start = (port) => {
    console.log("UUID service started on " + port);
    service.start(port);
};

