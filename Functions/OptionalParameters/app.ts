function carpim(a: number, b: number, c?: number){

    if(typeof c !== "undefined"){
        return a*b*c;
    }
    return a*b;
}

let value3 = carpim(5,10);
console.log(value3);

let carpim2 = (a: number, b: number, c?: number): number => {
    if(typeof c !== "undefined"){
        return a*b*c;
    }
    return a*b;
}

let value4 = carpim2(5,10);
console.log(value4);


