let book = ["advance js", 200, 3000,400];
//let bookName = book[0];
//let bookPrice = book[1];
//let bookPages = book[2];  

//use of array destructuring, we can easily do it with single line of code
let [bookName, bookPrice, bookPages,bookId, publication] = book;
console.log(publication);

//here if we give more than the size of an array then it will give undefined.
console.log(publication);
