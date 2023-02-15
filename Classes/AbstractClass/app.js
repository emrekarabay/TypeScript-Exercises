var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Deparment name: " + this.name);
    };
    return Department;
}());
var AccountingDepartmant = /** @class */ (function (_super) {
    __extends(AccountingDepartmant, _super);
    function AccountingDepartmant() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartmant.prototype.printMeeting = function () {
        console.log("The accounting department meets each monday at 10am.");
    };
    AccountingDepartmant.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartmant;
}(Department));
// abstract class new instance alamaz
var department = new AccountingDepartmant();
department.printName();
department.printMeeting();
department.generateReports();
var department2;
department2 = new AccountingDepartmant();
department2.printName();
department2.printMeeting();
department2.generateReports();
