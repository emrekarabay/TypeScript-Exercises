enum Media {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}
console.log(Media.Magazine);
console.log(Media[3]);

enum PrintMedia {
    Newspaper  = "NEWSPAPAR",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
console.log(PrintMedia.Magazine);
console.log(PrintMedia["Book"]);

export {};
