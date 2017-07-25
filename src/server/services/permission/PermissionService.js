const identity = require('../identity/IdentityService');

const REST = require('../RestServiceFactory'),
  Response = REST.Response,
  RestEndpoint = REST.RestEndpoint,
  RestServiceFactory = REST.RestServiceFactory;

const permissions = [
  {
    service: 'ods',
    perms: [
      {
        serviceName: 'locations',
        allowedRoles: [
          {
            username: 'admin',
            crud: 0b1111
          },
          { username: 'odsUser',
            crud: 0b1110
          },
          {
            username: 'cds',
            crud: 0b0100
          }],
        endpoints: [
        {
          endpointName: 'GetId',
          httpMethod: 'GET',
          subPath: '/{id}'
        },
        {
          endpointName: 'GetAll',
          httpMethod: 'GET',
          subPath: '/all'
        },
        {
          endpointName: 'MakeLocation',
          httpMethod: 'POST',
          subPath: '/new'
        }]
      }]
  }
]

const verifyPermission = function(service, serviceName, username, httpMethod, path) {
  // Set result to false by default
  let result = false;
  for (let permission of permissions) {
    if (permission['service'] === service) {
      const servicePerms = permission['perms'];
      for (let perm of servicePerms) {
        if (perm['serviceName'] === serviceName) {
          const allowedRoles = perm['allowedRoles'];
          const endpoints = perm['endpoints'];
          for (let endpoint of endpoints) {
            if (endpoint['httpMethod'] === httpMethod && endpoint['subPath'] === path) {
              for (let role of allowedRoles) {
                if (role['username'] === username) {
                  const permSettings = role['crud'];
                  switch (httpMethod) {
                    case 'POST':
                      result = Boolean(permSettings & 0b1000);
                      break;
                    case 'GET':
                      result = Boolean(permSettings & 0b0100);
                      break;
                    case 'PUT':
                      result = Boolean(permSettings & 0b0010);
                      break;
                    case 'DELETE':
                      result = Boolean(permSettings & 0b0001);
                      break;
                    default:
                      break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return result;
}

const requestPermission = (req, res) => {
  const body = JSON.parse(req.body);
  const ret = verifyPermission(body.service,
    body.serviceName,
    body.user,
    body.method,
    body.path);
  res.json({success: true, payload: ret});
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