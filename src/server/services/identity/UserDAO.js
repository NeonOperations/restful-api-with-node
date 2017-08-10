

// user database
let records = [
    {id: 1, username: 'neon', password: 'neon', displayName: 'Neon', emails: [{value: 'neon@neon.com'}]},
    {id: 2, username: 'admin', password: 'admin', displayName: 'Admin', emails: [{value: 'admin@neon.com'}]}
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

    }
    static FindUserById (id, callback) {

    }

    static AddUser (username,password,callback) {

    }

    static DeleteUser(id, callback) {

    }

    static findByUsername(username, callback){

    }

}