//-------------------------🚀 Day 1 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
//Question 2: Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
var personName = ("Haseeb");
console.log("Hellow ".concat(personName, " would you like to have coffee"));
//Question no 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var casesName = ("Haseeb Shahbaz");
var uppercase = casesName.toUpperCase();
var lowercase = casesName.toLowerCase();
var titlecase = casesName
    .split(' ')
    .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); })
    .join(' ');
console.log("Upper Case: ", uppercase);
console.log("Lower Case: ", lowercase);
console.log("Title Case: ", titlecase);
//-------------------------🚀 Day 2 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
var famousPerson = ("Quaid Azam");
console.log("\"".concat(famousPerson, " once said, \u201CWith faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.\u201D\""));
//Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famousQuote = ("“With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.”");
console.log("\"".concat(famousPerson, " once said, ").concat(famousQuote, "\""));
//Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var whitespacePerson = ("Name\tHaseeb   ");
var whitespacePerson2 = ("Name\nHaseeb   ");
console.log("".concat(whitespacePerson));
console.log("".concat(whitespacePerson2));
//-------------------------🚀 Day 3 Challenge: Start Coding! 🚀--------------------------------------------------
//Qustion 1:Write addition, subtraction, multiplication, and division operations that each result in the number 8. Enclose your operations in print statements.
var addition = 2 + 6;
var subtraction = 10 - 2;
var multiplication = 2 * 4;
var division = 16 / 2;
console.log("Addition of 2 + 6 =", addition);
console.log("Subtraction of 10 - 2 =", subtraction);
console.log("Multiplication of 2 * 4 =", multiplication);
console.log("Dividion of 16/2 =", division);
//Question 2: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(4 + 4);
console.log(3 + 5);
console.log(7 + 1);
//Question 3: Favorite Number: Store your favorite number in a variable. Then, create a message revealing your favorite number. Print that message.
var favoriteNumber = 7;
console.log("My Favourite Number is ".concat(favoriteNumber));
