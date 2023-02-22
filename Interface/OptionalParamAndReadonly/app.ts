
/// readonly 


// interface Person {
//     readonly firstName: string,
//     lastName: string,
//     middleName?: string

// }
// function getFullName(person: Person) {  

//     if(person.middleName){
//         return `${person.firstName} ${person.middleName} ${person.lastName}`
//     }
//     return `${person.firstName} ${person.lastName}`
// }


// let person: Person = {
//     firstName: "Emre",
//     middleName: "ALİ",
//     lastName: "karabay",
// }

// person.firstName = "Süleyman"

// console.log(getFullName(person));

/////////////////////////////////////////////////////

// interface function type

interface StringFormat {
    (str: string, isUpper: boolean): string
}

let format : StringFormat;

format = function (str: string, isUpper: boolean){
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase()
  
}
console.log(format("eMre",false));