
// EXTEND 

// interface IPerson {
//     name: string,
//     gender: string
// }

// interface IEmployee extends IPerson {
//     empNumber: number;
// }

// interface IWorker extends IPerson {
//     empDepartment: string;
// }

// let employee: IEmployee = {
//     empNumber: 1,
//     gender: "Male",
//     name: "emre"
// }

// let employeeDepartment: IWorker = {
//     empDepartment: "IT",
//     gender: "MaleDepartment",
//     name: "emreDepartment"
// }

// console.log(employee);
// console.log(employeeDepartment);

// IMPLEMENT TO CLASS(ONERILMEZ)

interface IPerson {
    name: string;
    gender: string;
}

class Employee implements IPerson {
    name: string;
    gender: string;
    empNumber: number;

    constructor(empNumber: number, name: string, gender: string){
        this.empNumber = empNumber;
        this.name = name;
        this.gender = gender;
    }
}

let employee = new Employee(10,"Emre","Karabay");

console.log(employee);
