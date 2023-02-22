// type olarak kullanırız

// function getFullName(person: {
//     firstName: string,
//     lastName: string
// }) {
//     return `${person.firstName} ${person.lastName}`
// }

interface Person {
    firstName: string,
    lastName: string
}
function getFullName(person: Person) {  
    return `${person.firstName} ${person.lastName}`
}


let person = {
    firstName: "Emre",
    lastName: "karabay",
    age: 23
}

console.log(getFullName(person));