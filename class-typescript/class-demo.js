var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, " , age: ").concat(this.age));
    };
    return User;
}());
var user1 = new User("saikat", 23);
user1.display();