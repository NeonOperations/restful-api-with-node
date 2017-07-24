const REST = require('../RestServiceFactory'),
  Response = REST.Response,
  RestEndpoint = REST.RestEndpoint,
  RestServiceFactory = REST.RestServiceFactory;


const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var d = new Date().getTime();
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
};

/**
 * Service Generates Unique Id
 *
 * @type {*|RestServiceFactory}
 */
module.exports.service = new RestServiceFactory(
  "UUID",
  [
    new RestEndpoint(
      'GET',           // method
      '/uuid',         // uri
      (req, res) => {  // provider
        let ret;
        try {
          let uuid = getUUID();//UUID.generateUUID();
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
      })
  ]
);

let service = module.exports.service;


module.exports.start = (port) => {
  console.log("UUID service started on " + port);
  service.start(port);
};

