let API = require('../../src/server/api/SecurePrxoyAPI');

module.exports = (app) => {



    app.post('/ajax/logon',function (req, res) {

        let username = req.body.username;

        let password = req.body.password;

        API.Id.RequestToken(username,password,false,(ret)=>{

            try {
                if (ret.success === true) {
                    let token = ret.payload.token;
                    req.session.token = token;
                    let username = API.Id.GetUserFromTokenSync(token);
                   res.json({success : true, message : "token stored"});
                } else {
                    res.json({success : false, message : "token does not exist"});

                }
            }catch(x){
                res.json( x );
            }

        });

    });

}
