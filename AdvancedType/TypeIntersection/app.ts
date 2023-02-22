let varName: number | string = "Emre";

// interfaceleri birleştirip içindeki property leri kullanmaya yönelik


interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    name: string;
    id: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Employee = Identity & Contact;

let kisim: Employee = {
    id: 54,
    name: "Emre",
    phone: "9995558844",
    email: "@gmail.com"
}

console.log(kisim);

type Customer = BusinessPartner & Contact;

let musterim: Customer = {
    credit: 123456,
    email: "@gmail.com2",
    name: "Emre2",
    phone: "99955588442",

}

console.log(musterim);