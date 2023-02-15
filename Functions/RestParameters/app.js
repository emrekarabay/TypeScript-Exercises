function toplam(a) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var total = 0;
    numbers.map(function (num) {
        total += num;
    });
    return a + " " + total;
}
var result = toplam("Emre", 10, 20, 30);
console.log(result);
