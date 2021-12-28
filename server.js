var log = require('logger')(module);
var db = require('db');
db.connect();
// module.exports = exports = this
// var user = require('./user');
var User = require('./user');
// require('./user'); // global
function run() {
    // var ralph = new user.User('Ralph');
    // var alex = new user.User('Alex');
    var ralph = new User('Ralph');
    var alex = new User('Alex');
    log(db.getPhrase("Run successful"));

// var ralph = new User('Ralph'); // global
// var alex = new User('Alex'); // global

alex.hello(ralph);
alex.iam();
}

if (module.parent) {
    exports.run = run; 
    console.log(module);
} else {
    run();
}



