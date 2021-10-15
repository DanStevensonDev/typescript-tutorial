var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    // This errors because readonly is set above - cannot assign
    // changeUnchangeableName(): void {
    //     this.unchangeableName = "foo"
    // }
    User.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return User;
}());
var user = new User("Dan", "Stevenson");
console.log(user.getFullName());
