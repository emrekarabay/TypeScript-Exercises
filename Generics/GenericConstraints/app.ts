function merge<U extends object,V extends object>(obj1: U, obj2: V){
    return{
        ...obj1,
        ...obj2
    }
}

let person = merge(
    {name:"Emre"},
    // {age: 29}
    29 // error
)

console.log(person);
    