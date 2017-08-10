// Get the packages we need
const express = require('express');
const path = require('path');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userController = require('./controllers/user');
const passport = require('passport');
const authController = require('./controllers/auth');
const clientController = require('./controllers/client');
const ejs = require('ejs');
const session = require('express-session');
const oauth2Controller = require('./controllers/oauth2');
const logging = require('morgan');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restful-api-with_node');

// Create our Express application
const app = express();

app.use(logging('combined'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use body-parser package
app.use(bodyParser.urlencoded({ extended: true }));

// Use Express session support since OAuth2orize requires it
app.use(session({
  secret: 'Super Secret Session Key',
  saveUninitialized: true,
  resave: true
}));

//
app.use(express.static(path.join(__dirname, 'public')));



var sassMiddleware = require('node-sass-middleware');
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));

// Use the passport package
app.use(passport.initialize());

// Use environment defined port or 3000
const port = process.env.PORT || 3000;

// Create our Express router
//const router = express.Router();

// router.route('/users')
//   .post(userController.postUsers)
//   .get(authController.isAuthenticated, userController.getUsers);
//
// router.route('/clients')
//   .post(authController.isAuthenticated, clientController.postClients)
//   .get(authController.isAuthenticated, clientController.getClients);
//
// // Create endpoint handlers for oauth2 authorize
// router.route('/oauth2/authorize')
//   .get(authController.isAuthenticated, oauth2Controller.authorization)
//   .post(authController.isAuthenticated, oauth2Controller.decision);
//
// // Create endpoint handlers for oauth2 token
// router.route('/oauth2/token')
//   .post(authController.isClientAuthenticated, oauth2Controller.token);
//
// // Register all our routes with /api
// app.use('/api', router);

// Start the server
app.listen(port);


const indexRoute = require('./routes/index');
indexRoute(app);

const logonRoute = require('./routes/logon');
logonRoute(app);


startServices =() =>
{
    // uuidService
    const uuidService = require('./src/server/services/uuid/UUIDService');
    uuidService.start(9901);

    // identity service
    const identityService = require('./src/server/services/identity/IdentityService');
    identityService.start(9902);

    // permission service
    const permissionService = require('./src/server/services/permission/PermissionService');
    permissionService.start(9903);


    const proxyService = require('./src/server/services/proxy/ProxyService')
    proxyService.start(9904);
}
startServices();