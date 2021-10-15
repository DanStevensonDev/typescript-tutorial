var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var user = new User("Dan", "Stevenson");
console.log(user.getFullName());
// accessible only on the class
console.log(User.maxAge);
// not on the instance
// console.log(user.maxAge)
