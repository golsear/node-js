var user = require('./user');
// require('./user'); // global

var ralph = new user.User('Ralph');
var alex = new user.User('Alex');

// var ralph = new User('Ralph'); // global
// var alex = new User('Alex'); // global

alex.hello(ralph);
alex.iam();