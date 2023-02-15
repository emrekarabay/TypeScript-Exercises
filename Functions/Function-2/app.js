function add(a, b) {
    return a + b;
}
var toplam = add(5, 6);
console.log(toplam);
function bastir() {
    console.log("Emre");
}
bastir();
function birlestir(name, surname) {
    if (surname === void 0) { surname = "Karabay"; }
    return name + ' ' + surname;
}
var value = birlestir("Emre", "Karabay2");
console.log(value);
