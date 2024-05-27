//-------------------------🚀 Day 1 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.

//Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
let personName: string = ("Haseeb")
console.log(`Hellow ${personName} would you like to have coffee`)

//Question no 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let casesName: string = ("Haseeb Shahbaz");

let uppercase: string = casesName.toUpperCase();
let lowercase: string = casesName.toLowerCase();
let titlecase: string = casesName
.split(' ')
.map(word=> word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(' ')

console.log("Upper Case: ", uppercase);
console.log("Lower Case: ",lowercase);
console.log("Title Case: ",titlecase);

//-------------------------🚀 Day 2 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
let famousPerson: string = ("Quaid Azam")
console.log(`"${famousPerson} once said, “With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”"`)

//Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famousQuote: string = ("“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”")
console.log(`"${famousPerson} once said, ${famousQuote}"`)

//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
let whitespacePerson: string= ("Name\tHaseeb   ")
let whitespacePerson2: string= ("Name\nHaseeb   ")
console.log(`${whitespacePerson}`)
console.log(`${whitespacePerson2}`)

//-------------------------🚀 Day 3 Challenge: Start Coding! 🚀--------------------------------------------------
//Qustion 1:Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
let addition: number = 2 + 6;
let subtraction: number = 10 - 2;
let multiplication: number = 2 * 4; 
let division: number = 16/2;

console.log("Addition of 2 + 6 =" , addition);
console.log("Subtraction of 10 - 2 =", subtraction);
console.log("Multiplication of 2 * 4 =" , multiplication);
console.log("Dividion of 16/2 =" , division);

//Question 2: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(4 + 4);
console.log(3 + 5);
console.log(7 + 1);

//Question 3: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
let favoriteNumber: number = 7;
console.log(`My Favourite Number is ${favoriteNumber}`)

//-------------------------🚀 Day 4 Challenge: Start Coding! 🚀--------------------------------------------------
