let firstNames: string[] = ["Süleyman","Ali","Mustafa"];
let firstNames2: Array<string> = ["Süleyman2","Ali2","Mustafa2"];

console.log(firstNames);
console.log(firstNames2);

let firstNames3: Array<string>;
firstNames3 = ["Süleyman3","Ali3","Mustafa3"];
console.log(firstNames3);

let firstNumbers3: Array<number>;
firstNumbers3 = [2,6,9];
console.log(firstNumbers3);

let values: (string | number)[] = ["Süleyman",5,"Ali",10,"Mustafa"];
console.log(values);

let values2: Array<string | number> = ["Süleyman2",52,"Ali2",102,"Mustafa2"];
console.log(values2);
export {};