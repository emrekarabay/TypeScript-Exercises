class Circle {
    static pi: number = 3.14
    pi =3;

    constructor(){
        this.pi++;
        Circle.pi++;
    }
    static hesapla(yaricap: number){
        return this.pi * yaricap *yaricap;
    }
}

// static tün new instance lar arasında paylaşılır

let objem = new Circle();
let objem2 = new Circle();
let objem3 = new Circle();

console.log(Circle.pi);
console.log(Circle.hesapla(5));
console.log(objem.pi);


