const REST = require('../RestServiceFactory'),
  Response = REST.Response,
  RestEndpoint = REST.RestEndpoint,
  RestServiceFactory = REST.RestServiceFactory;

const requestPermission = (token, user) => {
  return ((req, res, next) => {
    console.log(req);
    if (req.session.user &&
      req.session.user.role === role) {
      next();
    } else {
      res.send(403);
    }
  });
}

module.exports.service = new RestServiceFactory("Permission",
  [
    new RestEndpoint('POST', '/requestpermission', requestPermission),
  ]
);

module.exports.start = (port) => {
  console.log("Permission service started on " + port);
  module.exports.service.start(port);
};