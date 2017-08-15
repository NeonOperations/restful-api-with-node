require('../client/css/style.scss');

require('./css/simple-sidebar.scss');
require('socket.io-client');

const $ = require('jquery');


let React = require('react');
let ReactDom = require('react-dom');



require('./../shared/utils/uuid');


let App = window.App || {};

App.Ajax   = require('./ajax/Ajax.js');
App.Cipher = require('../shared/cipher/cipher');
App.Rand   = require('../shared/utils/uuid');
App.SideNav = require('./sidenav/sidenav');

// App.renderMessage = (title,msg,id) => {
//     ReactDom.render(<Message title={title} message={msg}/>, document.getElementById(id));
// };

window.App = App;