const REST = require('../RestServiceFactory'),
  Response = REST.Response,
  RestEndpoint = REST.RestEndpoint,
  RestServiceFactory = REST.RestServiceFactory;


const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let d = new Date().getTime();
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};
module.exports.getUUID = getUUID;


let provider =(req, res) => {
    let ret;
    try {
        let uuid = getUUID();
        ret = {
            success: true,
            payload: { uuid: uuid }
        }

    } catch (e) {
        ret = {
            success: true,
            error: JSON.stringify(e)
        };
    }
    res.json(ret);
}

module.exports.provider = provider;

/**
 * Service Generates Unique Id
 *
 * @type {*|RestServiceFactory}
 */
module.exports.service = new RestServiceFactory("UUID",
  [
      new RestEndpoint('GET','/uuid', provider)
  ]
);

let service = module.exports.service;


module.exports.start = (port) => {
  console.log("UUID service started on " + port);
  service.start(port);
};

