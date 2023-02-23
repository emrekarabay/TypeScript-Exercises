function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 54, 87, 3, 7];
// console.log(getRandomNumber(numbers));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var adlarim = ["Süleyman", "Emre", "Karabay"];
// console.log(getRandomString(adlarim));
// önerilmez any kullanımı
// function getRandomElement(items: any[]): any {
//     let randomIndex = Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }
// console.log(getRandomElement(numbers));
// console.log(getRandomElement(adlarim));
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(numbers));
console.log(getRandomElement(adlarim));
