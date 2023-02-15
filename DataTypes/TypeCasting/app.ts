let value: unknown = "1";
console.log(typeof(value));

let value2: number = <number>value;
console.log(value2);
console.log(typeof(value2));

let value3 = value as number;
console.log(value3);
console.log(typeof(value3));

export {};





