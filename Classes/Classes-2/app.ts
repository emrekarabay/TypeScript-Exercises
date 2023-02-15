class Person {
    id: number;
    firstName: string;
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

let user = new Person(45,"Emre","Karabay");
console.log(user);
console.log(user.getFullName());
