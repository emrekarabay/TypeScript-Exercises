function carpim(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
var value3 = carpim(5, 10);
console.log(value3);
var carpim2 = function (a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
};
var value4 = carpim2(5, 10);
console.log(value4);
