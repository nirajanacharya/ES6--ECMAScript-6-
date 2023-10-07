// Template Literals use back-ticks (``) rather than the quotes ("") we're used to with strings.\
//Template literals has replaced the need for concatenation in most cases.\
//let us see the example.
let name = `john is a good boy`;
//if we want to break line after a is then we can use \n in normal but in template literals we can use enter key.

console.log(name);
let nam= `john is 
a good boy`;
console.log(nam);

//if we want to use variable in the string then we can use ${} in template literals.
let firstName = 'John'; 
let lastName = 'Doe';   
let age = 25;   
let str = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old.`;
console.log(str);