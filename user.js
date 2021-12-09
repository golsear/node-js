// exports
// global

function User(name) {
    this.name = name;

    this.iam = function () {
        console.log('I am, ' + this.name);
    } 

}

User.prototype.hello = function (who) {
    console.log('Hello, ' + who.name);
}

console.log('user.js is required!');

exports.User = User;
// global.User = User;