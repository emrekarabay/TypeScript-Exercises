let code: any = 123;
console.log(typeof(code)); //number

let empCode = <number>code;
console.log(typeof(code)); //number


interface Employee {
    name: string,
    code: number
}

let employee = <Employee>{};
console.log(typeof(employee));

employee.name = "Emre";
console.log(employee);


export {};
