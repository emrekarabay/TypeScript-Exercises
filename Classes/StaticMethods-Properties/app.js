var Circle = /** @class */ (function () {
    function Circle() {
        this.pi = 3;
        this.pi++;
        Circle.pi++;
    }
    Circle.hesapla = function (yaricap) {
        return this.pi * yaricap * yaricap;
    };
    Circle.pi = 3.14;
    return Circle;
}());
// static tün new instance lar arasında paylaşılır
var objem = new Circle();
var objem2 = new Circle();
var objem3 = new Circle();
console.log(Circle.pi);
console.log(Circle.hesapla(5));
console.log(objem.pi);
