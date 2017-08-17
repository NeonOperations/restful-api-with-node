const request = require('request');

module.exports = (app) => {


    app.get('/ajax/srf/All', function (req, res) {

        let url = 'http:/localhost:8080/cdsWebApp/SRF/';

        request.get(url, (results)=>{
            res.json(results);
        });

    });

    app.get('/ajax/srf/getById/:id', function (req, res) {


        let url = 'http:/localhost:8080/cdsWebApp/SRF/'+ req.param.id;

        request.get(url, (results)=>{
            res.json(results);
        });

    });

    app.get('/ajax/srf/dataRange/:dts/:dte', function (req, res) {

        let dts = req.param.dts;

        let dte = req.param.dte;

        let url = 'http:/localhost:8080/cdsWebApp/SRF/';

        request.get(url, (results)=>{
            res.json(results);
        });

    });

    app.get('/ajax/srf/dateRangAndStreamName/:dts/:dte/:strmname', function (req, res) {

        let dts = req.param.dts;
        let dte = req.param.dte;
        let strmname = req.param.strmname;

        let url = 'http:/localhost:8080/cdsWebApp/SRF/';

        request.get(url, (results)=>{
            res.json(results);
        });

    });

    app.post('/ajax/srf/add', function (req, res) {

        let url = 'http:/localhost:8080/cdsWebApp/SRF/';

        let data = req.body;
        data.username =  req.session.username;
        data.passowrd =  req.session.password;

        // let data = {
        //     "startDate" 			: "2015-07-01T00:00:00",
        //     "endDate"				: "2015-08-04T11:59:59",
        //     "measurementStreamName" : "NEON.D01.HARV.DP1.00002.001.01325.000.060.000" ,
        //     "username"				: ,
        //     "password"              :
        //     "userComment"			: "Found a Fox living in the sensor hut, chewed up wires",
        //     "srf"					: "1"
        // };

        request.past(url, data,(results)=>{
            res.json(results);
        });

    });

    app.put('/ajax/srf/update', function (req, res) {

        let url = 'http:/localhost:8080/cdsWebApp/SRF/';

        let data = req.body;
        data.username =  req.session.username;
        data.passowrd =  req.session.password;

        request.past(url, data,(results)=>{
            res.json(results);
        });

    });

}