let API = require('../../src/server/api/SecurePrxoyAPI');

module.exports = (app) => {


    app.post('/ajax/ods', function (req, res) {

        let username = req.body.username;

        let password = req.body.password;

        let data = [

            {
                system : "ods",
                host: "den-devisd-1.ci.neoninternal.org",
                post: "9090",
                service_name: "Locations",
                desc : "Information on Locations",
                path: "neon-ods/api/locations",
                sub_path: "/siteinfo",
                GET: true,
                PUT: false,
                POST: false,
                DELETE: false
            }
        ];

        res.json(data);

    });

}
