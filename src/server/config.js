module.exports = {

    mongo : {
        'host': 'localhost',
        'port': 27017,
        'user': 'admin',
        'pass': 'redpoint',

        /**
         * get the mongo db connection url with authentication
         * @returns {string}
         */
        getAdminUrl: function () {
            let uri = "mongodb://" + this.user + ":" + this.pass + "@" + this.host + ":" + this.port;
            return uri;
        },

        /**
         * Url for named database with authentication
         *
         * @param name
         * @returns {string}
         */
        getUrl: function (name) {
            let uri = "mongodb://" + this.user + ":" + this.pass + "@" + this.host + ":" + this.port + "/" + name;
            return uri;
        },

        /**
         * get the mongo db connection url without authentication
         * @returns {string}
         */
        getDatabaseUrlNoAuth: function (name) {
            let uri = "mongodb://" + this.host + ":" + this.port + "/" + name;
            return uri;
        },

        'admin_db': 'admin',

    },

    services : [
        {
            name: "UUID",
            host: "localhost",
            port: 9001,
            endpoints:[{
                method: "get",
                path: "uuid",
                provider : require('../server/services/uuid/UUIDService').provider
                }
            ]
        }
        ,
        {
            name: "Identity",
            host: "localhost",
            port: 9002,
            endpoints: [
                {method: "post", path: "requesttoken"},
                {method: "post", path: "validatetoken"},
                {method: "post", path: "revoketoken"},
                {method: "post", path: "revokeuser"},
                {method: "post", path: "userfromtoken"}
                ]
        }
        ,
        {
            name: "Permission",
            host: "localhost",
            port: 9003,
            endpoints: [{method: "post", path: "requestpermission"}]
        }
        ,
        {
            name: "ProxyService",
            host: "localhost",
            port: 9004,
            endpoints: [{method: "post", path: "proxy"}]
        }
    ]


};