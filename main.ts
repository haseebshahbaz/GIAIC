//45 Question Assignment of Governor Initiative for Artificial Intelligance


// Question No 2
let personName: string = "Kamil Khan"

console.log(`Assalam u alikum ${personName} how are you?`)


//Question no 3
let person_Name: string = "Kamil Khan";

// Print the name in lowercase
console.log(person_Name.toLowerCase());

// Print the name in uppercase
console.log(person_Name.toUpperCase());

// Print the name in title case
console.log(person_Name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' '));


// Question No 4
console.log(`Allama Iqbal once said, "Words without power, is mere philosophy"`)

//Question No 5
let authorName: string = "Allama Iqbal"
let message: string = "Words without power, is mere philosophy"

console.log(`${authorName} once said, "${message}"`)

//Question no 6

let person_name: string = "\tKamil Khan\n";

// Print the name with the whitespace displayed
console.log("Name with whitespace:", JSON.stringify(person_name));

// Print the name after stripping the whitespace
let strippedName: string = person_name.trim();
console.log("Name after stripping whitespace:", JSON.stringify(strippedName));

//Question No 7

//Addition Operator
console.log(`Addition: 4 + 4 = ${4 + 4}`)

//Subtraction Operator
console.log(`Subtraction: 9 - 1 = ${9 - 1}`)

//Multiplication Operator
console.log(`Multiplication: 2 * 4 = ${2 * 4}`)

//Division Operator
console.log(`Division: 64 / 8 = ${64 / 8}`)


//Question No 8
console.log(4 + 4)
console.log(16 - 8)
console.log(4 * 2)
console.log(16 / 2)


//Question No 9
let favNum: number = 7

console.log(`Your favorite number is "${favNum}"`)

//Question no 11
let names: string[] = ["Haseeb", "Umer", "Hassan", "Kamil", "Saaed"];

// Print each person's name by accessing each element in the list, one at a time
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//Question no 12

// Print a personalized message for each person
names.forEach(name => {
    console.log(`Hello, ${name}! Let's Plan a Picnic!`);
});

//Question no 13
let favorite_vehicle: string[] = ["Suzuki 110CC" , "Honda City" , "Toyota Fortuner"]

favorite_vehicle.forEach (vehicle =>{
    console.log(`It's my wish to own ${vehicle}`)
})

//Question no 14
let guest_list: string[] = ["Rehman Khan" , "Mubarak Rana" , "Ishtiaq Ahmed"]

guest_list.forEach (list =>{
    console.log(`Assalam u alikum Mr. ${list} you are invited for a dinner at my home today` )
})

//Question no 15
// Assume Ishtaiq Ahmed can't make to dinner
let unavailable_guest: string = "Ishtiaq Ahmed"
console.log(`\nUnfortunately, ${unavailable_guest} can't make it to the dinner.\n`);

// Now replace Ishtiaq AHmed with new quest
let new_quest: string = "Sharafat"

guest_list[guest_list.indexOf(unavailable_guest)] = new_quest

// Print new invitations
guest_list.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Question no 16
let additional_quest: string[] = ["Atif", "Saad", "Kamil"]

guest_list.push(...additional_quest)

// Print invitations for additional guests
additional_quest.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

// Print final guest list
console.log("\nFinal Guest List:");
guest_list.forEach(guest => {
    console.log(guest);
});

//Question no 17
// Initial guest list
let guestList: string[] = ["Rehman Khan", "Mubarak", "Sharafat", "Atif", "Saad", "Kamil"];

// Print initial invitations
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});

// New dinner table won't arrive in time, only space for two guests
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests.\n");

// Remove guests one at a time until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitations to the two remaining guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names to have an empty list
guestList.pop();
guestList.pop();

// Print the final guest list (should be empty)
console.log("\nFinal Guest List:");
console.log(guestList);

