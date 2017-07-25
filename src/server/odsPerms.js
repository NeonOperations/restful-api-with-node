let perm = [
    {
        service: "ods",

        "perms": [
            {
                serviceName: "Locations",
                allowedRoles: [
                    {"username": "admin", "crud": [1, 1, 1, 1]},
                    {"username": "odsUser", "crud": [1, 1, 1, 0]},
                    {"username": "cds", "crud": [0, 1, 0, 0]}
                    ],
                "endpoint": [
                    {
                        endpointName: "GetId",
                        httpMethod: "GET",
                        subPath: "/{id}"
                    }
                    ,
                    {
                        endpointName: "GatAll",
                        httpMethod: "GET",
                        subPath: "/all"
                    },
                    {
                        endpointName: "MakeLocation",
                        httpMethod: "POST",
                        subPath: "/new"
                    }
                ]
            }

    }
}

function CanExeute( service, serviceName, endpointName, username){

}