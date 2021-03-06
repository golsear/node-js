// module.exports = exports = this
// exports
// global

var db = require('db');

function User(name) {
    this.name = name;

    this.iam = function () {
        console.log('I am, ' + this.name);
    } 

}

User.prototype.hello = function (who) {
    console.log(db.getPhrase("Hello") + ", " + who.name);
}

module.exports = User;
// exports.User = User;
// global.User = User;


