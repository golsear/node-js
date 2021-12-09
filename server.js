function User(name) {
    this.name = name;

    this.iam = function () {
        console.log('I am, ' + this.name);
    } 

}

User.prototype.hello = function (who) {
    console.log('Hello, ' + who.name);
}

var ralph = new User('Ralph');
var alex = new User('Alex');

alex.hello(ralph);
alex.iam();