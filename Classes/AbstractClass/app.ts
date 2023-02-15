abstract class Department {
    constructor(public name: string){   
    }
    abstract printMeeting(): void;
    abstract generateReports(): void;
    printName(): void {
        console.log("Deparment name: " + this.name);
        
    }
}

class AccountingDepartmant extends Department {

    constructor(){
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The accounting department meets each monday at 10am.");  
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
        
    }


}

// abstract class new instance alamaz

let department = new AccountingDepartmant();
department.printName();
department.printMeeting();
department.generateReports()

let department2: Department
department2 = new AccountingDepartmant();
department2.printName();
department2.printMeeting();
department2.generateReports()