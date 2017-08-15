

// user database
let records = [
    {username: 'neon', password: 'neon', displayName: 'Neon', emails: [{value: 'neon@neon.com'}]},
    {username: 'admin', password: 'admin', displayName: 'Admin', emails: [{value: 'admin@neon.com'}]}
];


class User {

    constructor(username,displayName,email){

        this.username = username;
        this.displayName = displayName;
        this.emial = email;
    }
}


class UserDao {

    static GetAll(callback) {
        return records;
    }

    static AddUser (username,password,callback) {
        let record = {
            username : username,
            password : password
        };
        records.push(record);
    }

    static FindById (id) {
        let idx = id - 1;
        return records[idx];
    }

    static FindByUsername (username) {

        let rec = records.filter( (r) => {
            return r.username === username
        });
        return rec;
    };

    static DeleteUser(id, callback) {
        let ids = records.map( (r) =>{ return r.id ;} );
        let index = ids.indexOf(id);
        records.splice(index,index);
    }
}