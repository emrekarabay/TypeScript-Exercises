// type olarak kullanırız
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Emre",
    lastName: "karabay",
    age: 23
};
console.log(getFullName(person));
