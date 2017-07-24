const REST = require('../RestServiceFactory'),
    Response = REST.Response,
    RestEndpoint = REST.RestEndpoint,
    RestServiceFactory = REST.RestServiceFactory;

const  GET = require('../../../server/http/get');
const  POST = require('../../../server/http/post');
/**
 * Service Generates Unique Id
 *
 * @type {*|RestServiceFactory}
 */

let Endpoints = {};

function Endpoint(serviceName, host,port,path,method,payload){
    this.serviceName = serviceName;
    this.host = host;
    this.method = method;
    this.path = path;
    this.method = method;
    thi.payload = payload;
}


module.exports.service = new RestServiceFactory(
    "ProxyService",
    [
        new RestEndpoint(
            'POST',
            '/proxy',
            (req, res) => {
                let ret;
                let pt = req.body;

                let url = pt.host+":"+pt.port+"//"+pt.path;
                let payload = pt.payload;

                try {
                    if ( delegatedEndpoit.method === 'GET') {
                        GET.get(url, (err, body) => {
                            ret = {
                                success: true,
                                payload: body
                            };
                            res.json(ret);
                        })
                    }
                    else if (delegatedEndpoit.method === 'POST'){
                        POST.post(url,payload,, (err, body) => {
                            ret = {
                                success: true,
                                payload: body
                            };
                            res.json(ret);
                        });
                    }
                    else if (delegatedEndpoit.method === 'PUT'){

                    }
                    else if (delegatedEndpoit.method === 'DEL'){

                    }
                } catch(e) {
                    ret = {
                        success: true,
                        error: JSON.stringify(e)
                    };
                }

            })
    ]
);

let service = module.exports.service ;


module.exports.start = (port) => {
    console.log("UUID service started on " + port);
    service.start(port);
};

