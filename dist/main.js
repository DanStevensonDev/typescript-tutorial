var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    // "implements" makes this function required, since it is in the interface
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var user = new User("Dan", "Stevenson");
console.log(user.getFullName());
