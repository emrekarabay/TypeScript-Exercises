// EXTEND 
var Employee = /** @class */ (function () {
    function Employee(empNumber, name, gender) {
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
    return Employee;
}());
var employee = new Employee(10, "Emre", "Karabay");
console.log(employee);
