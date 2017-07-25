const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

const GET = require('../../../server/http/get');
const POST = require('../../../server/http/post');

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

                let ret;
                let endpoint = req.body;

                let token = endpoint.token;

                // call the permissions sevice;

                let url = endpoint.url;
                let payload = endpoint.payload;
                let method = endpoint.method;



                try {
                    if (delegatedEndpoit.method === 'GET') {
                        GET.get(url, (err, body) => {
                            ret = {
                                success: true,
                                payload: body
                            };
                            res.json(ret);
                        })
                    }
                    else if (delegatedEndpoit.method === 'POST') {
                        POST.post(url, payload , (err, body) => {
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

