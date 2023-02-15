var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var user = new Person(45, "Emre", "Karabay");
console.log(user);
// user.id = 5 // error
console.log(user.getFullName());
