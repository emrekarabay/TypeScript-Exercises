
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a+b;
}

let value = add(5,90);
console.log(value);

let value2 = add("Emre","Karabay");
console.log(value2);

