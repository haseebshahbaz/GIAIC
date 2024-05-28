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
//Question 1: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

//Question 2: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
let names : string[] = ["Haseeb", "Kamil" , "Saad", "Umer" , "Abdullah"]
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Question 3: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
for (let i = 0; i < names.length; i++){
    console.log(`Assalam u alikum ${names[i]}, I hope you are doing Good`)
}

//-------------------------🚀 Day 5 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportation: string[] = ["Suzuki 110CC", "Honda BRV", "Toyota ROCCO"]

for (let i = 0; i < transportation.length; i++ ) {
    console.log(`Its my wish to own a ${transportation[i]}`)
}

//Question 2: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guest: string[] = ["Abdullah", "Hashim", "Kamran"]

// for (let i = 0; i < guest.length; i++){
//     console.log(`Assalam u alikum Mr. ${guest[i]} you along with you complete family are invited for a dinner at my home.`)
// }

//Question 3: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
guest[guest.indexOf("Hashim")] = "Kamil";
console.log("New Guest List")

for (let i = 0; i < guest.length; i++){
    console.log(`Assalam u alikum Mr. ${guest[i]} you along with you complete family are invited for a dinner at my home.`)
}

//-------------------------🚀 Day 6 Challenge: Start Coding! 🚀--------------------------------------------------
//Question 1: More Guests: You've found a bigger dinner table, so there's room for more guests.
guest.push("Babar", "Imam", "Shadab")

console.log("Updated set of Invitation")
guest.forEach(guest=>{
    console.log(`Dear ${guest}, you are invited to dinner.`)
})

//Question 2: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
while (guest.length > 2) {
    let removedguest = guest.pop();
    console.log(`Sorry, ${removedguest}, we can't invite you to dinner.`);
}

console.log("You are still Invited")
guest.forEach(guest=>{
    console.log(`${guest} You are invited`)
})

//Question 3: Seeing the World: Think of at least five places you’d like to visit.
let want2visit: string[] = ["Saudia Arabia", "USA", "United Kingdom", "Australia", "Singapore", "Switzerland"]
for (let i = 0; i < want2visit.length; i++){
    console.log(`I would love to visit ${want2visit[i]} for Multiple Times`)
}

//-------------------------🚀 Day 7 Challenge: Start Coding! 🚀--------------------------------------------------
