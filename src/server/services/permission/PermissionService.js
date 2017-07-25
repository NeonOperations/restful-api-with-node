const identity = require('../identity/IdentityService');

const REST = require('../RestServiceFactory'),
  Response = REST.Response,
  RestEndpoint = REST.RestEndpoint,
  RestServiceFactory = REST.RestServiceFactory;

const permissions = [
  {user: 'admin', allow: ['ALL']},
  {user: 'ods-user', allow: ['ODS', 'CDS']},
  {user: 'cds-user', allow: ['CDS']}
];

const requestPermission = (req, res) => {

  if (!req.body) {
    //res.sendStatus(400);
  }

  const isTokenValid = identity.ValidateToken(req, res);
  console.log(isTokenValid);
}

module.exports.service = new RestServiceFactory("Permission",
  [
    new RestEndpoint('POST', '/requestpermission', requestPermission)
  ]
);

module.exports.start = (port) => {
  console.log("Permission service started on " + port);
  module.exports.service.start(port);
};