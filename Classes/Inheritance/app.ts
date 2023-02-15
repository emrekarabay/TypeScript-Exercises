class Person {
    public id: number;
    private firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(id: number, firstName: string, lastName: string){
        super(id,firstName,lastName);
    }
    
}

let user = new Person(45,"Emre","Karabay");
console.log(user);
console.log(user.getFullName());

let employee = new Employee(36,"Süleyman","karaaby2");
console.log(employee);
console.log(employee.getFullName());