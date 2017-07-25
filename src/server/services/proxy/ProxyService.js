const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

const GET = require('../../../server/http/get');
const POST = require('../../../server/http/post');
/**
 * Service Generates Unique Id
 *
 * @type {*|RestServiceFactory}
 */

let Endpoints = {};

Endpoints['SRF'] = new Endpoint();

function Endpoint(serviceName, host, port, path, method, payload) {
    this.serviceName = serviceName;
    this.host = host;
    this.method = method;
    this.path = path;
    this.method = method;
    thi.payload = payload;
}

Endpoints['SRF'] = new Endpoint('SRF','localhost','8080','cdsWebApp/SRF', (startDate,endDate,measurementStreamName,userComment,srfFlag,usernme)=>{ });

module.exports.key =  "24378549-9515-4c12-9bce-1c8da6ac2201";


// url  : 'https://api.random.org/json-rpc/1/invoke'
// data
//
function GetRandomIntegers(numberSamples, floor, ceiling, key, callback) {

    key =  key || module.exports.key;
    this.request_id = this.request_id || 1 ;
    this.request_id++;

    let post_data = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": module.exports.key ,
            "n": numberSamples,
            "min": floor,
            "max": ceiling,
            "replacement": true,
            "base": 10
        },
        "id": 19639
    };


    request.post('https://api.random.org/json-rpc/1/invoke', {json: post_data}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var ret = body.result.random.data;
            if (callback) {
                callback(ret);
            }
        } else {
            console.log(error);
        }
    });
}
module.exports.Endpoint = Endpoint;

module.exports.service = new RestServiceFactory(
    "ProxyService",
    [
        new RestEndpoint(
            'POST',
            '/proxy',
            (req, res) => {
                let ret;
                let pt = req.body;

                let url = pt.host + ":" + pt.port + "//" + pt.path;
                let payload = pt.payload;

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
                        POST.post(url, payload, , (err, body) => {
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

