function add(a: number,b:number): number {
    return a+b;
}

let toplam = add(5,6);
console.log(toplam);


function bastir(): void{
    console.log("Emre");
}
bastir();

function birlestir(name: string, surname: string = "Karabay"): string {
    return name + ' ' + surname;
}

let value = birlestir("Emre","Karabay2");
console.log(value);
