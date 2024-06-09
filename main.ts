// // example 1

// import { gu } from "date-fns/locale";

// let personName:string = "Eric";
// console.log(`Hello ${personName} , Would you like to learn some python today?`);


// // example 3

// let firstName :string = "Tarfeeha Hussain";

// // in lowercase
// console.log(firstName.toLowerCase());

// // in uppercase
// console.log(firstName.toUpperCase());

// // in title case
// console.log(firstName.replace(/\b\w/g,c=> c.toUpperCase()));

// // example 4

// let qoute : string = "A person who never made a mistake never tried anything new.";
// let author: string = "Albert Einstein";

// console.log(`${author} once said, "${qoute}"`);

// // example 5

// // let famous_person : string = "Albert Einstein";
// // let message : string = `${famous_person} once said, "${qoute}"`;

// // console.log(message);

// // // example 6

// // let PersonName : string = "\t\n  Tarfeeha Hussain  \t\n";
// // console.log("Original:", PersonName);
// // console.log("Stripped:", PersonName.trim());

// // // example 7 , 8

// // console.log(5 + 3);
// // console.log(10 - 2);
// // console.log(2 * 4);
// // console.log(16 / 2);

// // // exapmle 10

// // //author: [Tarfeeha Hussain]
// // //date: [monday , feburary 12 , 2024]

// // // example 9
// // let favouriteNum : number = 1;
// // console.log(`My favourite number is ${favouriteNum}`);

// // // exapmle 11
// // //let names: string[] = ["Tarfeeha","Arshi","Muntaha","Saleena"];
// // // console.log(names[0]);
// // // console.log(names[1]);
// // // console.log(names[2]);
// // // console.log(names[3]);
 
// // // example 12
// // let names: string[] = ["Tarfeeha","Arshi","Muntaha","Saleena"];
// // let Message:string = "Do you like to play circket?"

// // console.log(names[0] + " " + Message);
// // console.log(names[1] + " " + Message);
// // console.log(names[2] + " " + Message);
// // console.log(names[3] + " " + Message);

// // // example 13
// // let car :string[] =["BMW","Audi","Alto","Carola"]
// // car.map((items)=> console.log(`I would like to own a ${items}`))

// // example 14
// // let guests :string[] =["Mehak","Haseeb","Ali","Hamza"]
// // guests.map((item)=> console.log(`Dear ${item}, You are invited to the dinner`));
 
// // example 15
// // let guestArr : string[] = ["Mehak","Haseeb","Ali","Hamza"]
// // let cannotAttend :string = "Mehak";

// // console.log(cannotAttend+ " " + "Cannot attend the dinner")
// // let newGuest : string = "Alishbah"
// // guestArr[guestArr.indexOf(cannotAttend)] = newGuest;
// // console.log(newGuest);
// // guestArr.map((items)=> console.log(`You are invited to the dinner`))

// // // example 16
// let guestarray : string[] = ["Alishbah","Haseeb","Ali","Hamza"]
// let cannotAttend : string = "Alishbah"

// let newGuest : string = "Ahmed";
// guestarray[guestarray.indexOf(cannotAttend)] = newGuest;
// console.log(guestarray);

// guestarray.map((items) =>
//     console.log(`Dear ${items}, I found a bigger dinner table so I am invites more peoples.`))

// // part 2
// let guestNew : string = "Haider"
// guestarray.unshift(guestNew);
// console.log(guestarray)

// // part 3
// let middleGuest : string = "Fatima";
// let middleIndex = guestarray.length/4
// guestarray.splice(middleIndex,0,middleGuest)
// console.log(guestarray);

// // part 4
// guestarray.push("Zeeshan")
// console.log(guestarray)

// // part 5 
// guestarray.map((items) => console.log(`Dear ${items}, You are invited in the more people list on the dinner`));
// console.log(guestarray)

// // example 17
// let guests :string[] = ["Ali","Bilal","Hammad","Dawood","Haseeb"]
// // console.log("Due to limited space, only two peoples can be invited for dinner.");

// // while(guests.length > 2){
// //     const removedGuest = guests.pop();
// //     console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner`);

// // }

// // let guests : string[] = ["Ali","Bilal"]
// // guests.forEach((guest) => (
// //     console.log(`Dear ${guest}, you're still invited to the dinner.`)));

// // guests.pop();
// // guests.pop();

// // console.log("Final guest list:" , guests);

// // example 18
// /* Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

// //Step1: Create an array to store destinations for visit
// let destinations:string[] = ["Sydney","New York","London", "Paris", "Tokyo"];

// //Step2: Print the array in its original order
// console.log("print the array simply");
// console.log(destinations);

// //Step3: Print the array in alphabetical order without modifying the actual list
// console.log("\n print in alphabetical order");
// console.log([...destinations].sort());

// //Step4: Show that your array is still in its original order by printing it
// console.log("\n print in original order");
// console.log(destinations);     

// //Step5: Print the array in reverse alphabetical order without changing the order of the original list

// console.log("\n print in reverse alphabetical order");
// console.log([...destinations].sort().reverse());

// //Step6: Show that your array is still in its original order by printing it again

// console.log("\n print in original order again");
// console.log(destinations);

// //Step7: Reverse the order of your list. Print the array to show that its order has changed

// console.log("\n reverse the order of your list");
// console.log(destinations.reverse());

// //Step8: Reverse the order of your list again. Print the list to show it’s back to its original order

// console.log("\n reverse the order of your list again");
// console.log(destinations);

// //Step9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed

// console.log("\n sort your array");
// console.log(destinations.sort());

// //Step10: Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

// console.log("\n sort to change your array");
// console.log(destinations.sort().reverse());

// export {destinations};

//  example 19

// //Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// import {guestList} from '..//Exercise 15'

// console.log('\nPrinting total number of guests');
// console.log(`we finally invited ${guestList.length} people`);

// import {guestList as guestList16} from '..//Exercise 16'

// console.log('\nPrinting total number of guests');   
// console.log(`we finally invited ${guestList16} people`);

// import { guestList as guestList17} from .Exercise;

// console.log('\nPrinting total number of guests');

// console.log(`we finally invited ${guestList17.length} people`);

// import {destinations} from '..//Exercise 18'
// console.log('\nPrinting total number of destinations');
// console.log(destinations);
// export{}

// example 20

//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// let Destinations:string[]=["Bali","Paris","Cappadocia","Maldives"];
// console.log("Here are the some of my destination.");
// Destinations.map((item)=>console.log(item));


// example 21
// let person:{name : string, fname: string, age: number} = {name: "Tarfeeha", fname:"M Arif", age:18}
// console.log(person);


// example 22
// const Days : string[] = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// console.log(days{7});
// console.log(Days[6]);

// example 23


// let car = "subaru";
// //Test 01:equality camparison
// console.log("Is car == 'subaru'? I pridict true.");
// console.log(car == 'subaru'); //True
// //Test 02:strict equality comparison
// console.log("Is car === 'subaro'? I pridict true.");
// console.log(car === 'subaru'); //True
// //Test 03: unequality comparison
// console.log("Is car != 'subaro'? I pridict false.");
// console.log(car != 'subaru'); //false
// //test 04:strict unequality comparison
// console.log("Is car !== 'subaro'? I pridict false.");
// console.log(car !== 'subaru'); //false
// //Test 05:less than comparison
// console.log("Is car < 'subaro'? I pridict false.");
// console.log(car < 'subaru'); // (false)lexicographic comparison
// //Test 06:greater than comparison
// console.log("Is car > 'subaro'? I pridict false.");
// console.log(car > 'subaru'); //(false)lexicographic comparison
// //Test 07:less than or equal to comparison
// console.log("Is car <= 'subaro'? I pridict true.");
// console.log(car <= 'subaru'); //True
// //Test 08:greater than or equal to comparison
// console.log("Is car >= 'subaro'? I pridict false.");
// console.log(car >= 'subaru'); //True
// //test 9:checking truthinese
// console.log("Is car? I pridict True.");
// console.log(car); //True
// //Test 10:checking truthinese
// console.log("Is !car?' I pridict false.");
// console.log(!car); //false

// example 24

// let car = "Subaru";
// let age = 25;
// let numbers = [2, 3, 6, 7];
// //***String Tests***
// //Test 01:equality camparison
// console.log("Is car == 'subaru'? I pridict true.");
// console.log(car == 'subaru'); //True
// //Test 02:strict equality comparison
// console.log("Is car === 'subaro'? I pridict true.");
// console.log(car === 'subaru'); //True
// //Test 03: unequality comparison
// console.log("Is car != 'Toyota'? I pridict true.");
// console.log(car != 'Toyota'); //True
// //test 04:strict unequality comparison
// console.log("Is car !== 'subaro'? I pridict false.");
// console.log(car !== 'subaru'); //false
// //*** lower case function tests ***
// //Test 05:lower case conversion (true)
// console.log("Is car.tolowercase()== 'subaru'? I pridict true");
// console.log(car.toLowerCase() == 'subaru'); //true
// //Test 06:Lower case conversion(false) 
// console.log("Is car === car.tolowercase()? I pridict false");
// console.log(car === car.toLowerCase()); //false
// // *** Numericals Tests ***
// //Test 07:equality camparison
// console.log("Is age == 25 ? I pridict true.");
// console.log(age == 25); //True
// //Test 08: unequality comparison
// console.log("Is age != 30 ? I pridict true.");
// console.log(age != 30); //True
// //Test 09:less than comparison
// console.log("Is age < 30 ? I pridict true.");
// console.log(age < 30); // (true)lexicographic comparison
// //Test 10:greater than comparison
// console.log("Is age > 30 ? I pridict false.");
// console.log(age > 30); //(false)lexicographic comparison
// //Test 11:less than or equal to comparison
// console.log("Is age <= true ? I pridict true.");
// console.log(age <= 25); //True
// //Test 12:greater than or equal to comparison
// console.log("Is age >= 27'? I pridict false.");
// console.log(age >= 27); //false
// //*** Logical operators ***
// //Test 13:And operator
// console.log("Is age is > 15 && < 30? I pridict true.");
// console.log(age > 15 && age < 30); //true
// //Test 14: or operator
// console.log("Is age 30 > || < 15 ? I pridict false ");
// console.log(age > 30 || age < 15); //false
// //*** array tests ***
// //IN array
// console.log("Is 3 in numbers? I pridict true");
// console.log(3 in numbers); //true
// //not in array 
// console.log("Is 9 in numbers? I pridict false.");
// console.log(9 in numbers);

// example 25

// let alien_colour:string="green";
// if(alien_colour == "green")
//     {console.log("The player just earned 5 points.")};
//  alien_colour = "yellow";
//  if(alien_colour == "green")
//     {console.log("The player just earned 5 points.")};

// example 26

// let alien_colour = "green";
// if (alien_colour == "green") {
//     console.log("The player just earned 5 points for shooting a alien.");
// };
// {
//     console.log("The player just earned 10 points");
// }
// alien_colour = "red";
// if (alien_colour == "green") {
//     console.log("The player just earned 5 points for shooting a alien.");
// };

// example 27

// //version 01
// let alien_colour:string="green";
// if(alien_colour == "green"){console.log("The player just earned 5 points for shooting a alien.")
// }

// else if (alien_colour="yellow"){
//     console.log("The player just earned 10 points")
// }

// else if (alien_colour="red"){
//     console.log("The player just earned 15 points")
// }

// else {
//     console.log("please enter a right colour.")
// };

// //version 02

// alien_colour="red";
// if(alien_colour == "green"){console.log("The player just earned 5 points for shooting a alien.")};

// else if(alien_colour="yellow"){
//     console.log("The player just earned 10 points")
// }

// else if(alien_colour="red"){
//     console.log("The player just earned 15 points")
// }

// else{
//     console.log("please enter a right colour.")
// };

// //version 03

// alien_colour="yellow";
// if(alien_colour == "green"){console.log("The player just earned 5 points for shooting a alien.")};

// else if(alien_colour="yellow"){
//     console.log("The player just earned 10 points")
// };

// else if(alien_colour="red"){
//     console.log("The player just earned 15 points")
// };

// else{
//     console.log("please enter a right colour.")
// };

// example 28

// let ages :number=19

// if (ages < 2 ) {console.log("The person is a baby.")
//     }

// else if(ages >= 2 && ages < 4) {console.log("The person is a toddler.")
    
// };

// else if(ages >= 4 && ages < 13){console.log("The person is a kid.")
// };

// else if(ages >= 13 && ages < 20){console.log("The person is a teenager.")
// };

// else if(ages >= 20 && ages < 65){console.log("The person is a adult.")
// };

// else if(ages >= 65){console.log("The person is older. ")
// };


// exapmle 28

/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.
*/

// let age:number = 10;

// if (age < 2) {
//     console.log(`if age is=${age}, the person is a baby`)
// } else if (age < 4) {
//     console.log(`if age is=${age}, the person is a Todler`)
// }  else if (age < 13) {
//     console.log(`if age is=${age}, the person is a Kid`)
// }  else if (age < 20) {
//     console.log(`if age is=${age}, the person is a Teenager`)
// }  else if (age < 65) {
//     console.log(`if age is=${age}, the person is a Adult`)
// }  else {
//     console.log(`if age is=${age}, the person is a very adlut`)
// };
// console.log(`\n2nd case with age 45`)
// age=45;
// if (age < 2) {
//     console.log(`if age is=${age}, the person is a baby`)
// } else if (age < 4) {
//     console.log(`if age is=${age}, the person is a Todler`)
// }  else if (age < 13) {
//     console.log(`if age is=${age}, the person is a Kid`)
// }  else if (age < 20) {
//     console.log(`if age is=${age}, the person is a Teenager`)
// }  else if (age < 65) {
//     console.log(`if age is=${age}, the person is a Adult`)
// }  else {
//     console.log(`if age is=${age}, the person is a very adlut`)
// };


// example 29

/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// const favouriteFruit:string[] = ["apple", "banana", "mango"];

// //check if the fruit in included in array or not
// if (favouriteFruit.includes("apple")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("Orange")) {
//     console.log(`Oh Ho it is NOT availabe in array  `);
// };

// if (favouriteFruit.includes("banana")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("mango")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("strabery")) {
//     console.log(`it is NOT availabe in array  `);
// };

// Example 30

/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// const favouriteFruit:string[] = ["apple", "banana", "mango"];

 //check if the fruit in included in array or not
// if (favouriteFruit.includes("apple")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("Orange")) {
//     console.log(`Oh Ho it is NOT availabe in array  `);
// };

// if (favouriteFruit.includes("banana")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("mango")) {
//     console.log(`Yes it is availabe in array  `);
// };

// if (favouriteFruit.includes("strabery")) {
//     console.log(`it is NOT availabe in array  `);
// };

// Example 31

/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

// let userNames:string[] = ['admin', 'Shahid', 'inam', 'naveed','farooq']

// function greatUsers(usernames:string[]):void {
//     if (usernames.length === 0) {
//         console.log(`we need to find some users `);
//         return;
//     } 

//     for (const username of usernames) {
//         if (username.toLowerCase() === 'admin') {
//             console.log(`Hello thank you for login in again`);
//         } else {
//             console.log(`Hello ${username}, thank you for login in again`);
//     }
// }
// }
// console.log(`for non empty username:\n`)
// greatUsers(userNames);

// //to make array empty
// userNames = [];

// console.log(`\n\n for empty users names\n`)
// greatUsers(userNames)

// export{};

// EXample 32

// Current list of usernames
// const currentUsers: string[] = ['John', 'Jane', 'Alice', 'Bob', 'Eve'];

 // New list of usernames
// const newUsers: string[] = ['Alice', 'Mike', 'Ella', 'Frank', 'Sarah'];

// Convert all current usernames to lowercase for case-insensitive comparison
// const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

 // Loop through newUsers and check for uniqueness
// for (const newUser of newUsers) {
//   let isAvailable = true;
//   const newUserLower = newUser.toLowerCase();

//   for (const current of currentUsersLower) {
//     if (newUserLower === current) {
//       isAvailable = false;
//       break;
//     }
//   }

//   if (isAvailable) {
//     console.log(`Congratulations, '${newUser}' is available!`);
//   } else {
//     console.log(`Sorry, '${newUser}' is not available. Please enter a new username.`);
//   }
// }

// examaple 33

// Store the numbers 1 through 9 in an array
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 // Loop through the array
// for (const number of numbers) {
//     let ordinal;

//     // Use an if-else chain to determine the proper ordinal ending
//     if (number === 1) {
//         ordinal = 'st';
//     } else if (number === 2) {
//         ordinal = 'nd';
//     } else if (number === 3) {
//         ordinal = 'rd';
//     } else {
//         ordinal = 'th';
//     }

//     // Print the result with the proper ordinal ending
//     console.log(`${number}${ordinal}`);
// };

// example 34

 // Store your favorite pizza names in an array
// const favoritePizzas: string[] = ['Pepperoni', 'Margherita', 'Supreme'];

// //print piza names using for loop
// for (let i=0; i < favoritePizzas.length; i++) {
//     console.log(favoritePizzas[i]);
// }

 // Loop through the array and print each pizza name and a related statement
// //for (const pizza of favoritePizzas) 
// for (let i=0; i < favoritePizzas.length; i++) {
//     console.log(`I like " ${favoritePizzas[i]} " pizza.`);
// }

// // Print a concluding sentence
// console.log(`I really love pizza!`);

// example 35

 /*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet*/

// // Store the names of animals with a common characteristic in an array
// const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

 // Loop through the array and print a statement about each animal
// for (const animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would make a great pet.`);
// }

 // Print a concluding sentence about their common characteristic
// console.log(`Any of these animals would make a great pet! They are all known for being popular choices as pets.`);

// example 36

// function makeShirt(size: string, message: string): void {
//     console.log(`The shirt is size ${size} and it has the message: "${message}".`);
// }   

 // Call the function
// makeShirt("Large", "Hello, World!");

// export{}

// example 37

// function makeShirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`The shirt is size ${size} and it has the message: "${message}".`);
// }

// Create a large shirt with the default message
// makeShirt();

// Create a medium shirt with the default message
// makeShirt("Medium");

 // Create a small shirt with a custom message
// makeShirt("Small", "Custom message for a small shirt.");

// export{}

// example 38

// function describe_city(city:string, country:string=""): void {
//     console.log(`${city} is in ${country}`)
// }
// describe_city("Karchi", "Pakistan");
// describe_city("Pakistan", "Asia")
// describe_city("london", "france")

// example 39

// const cityCountry = (city: string, country: string): string => {
//     return `${city}, ${country}`;
// }

// Call the function with three city-country pairs and print the results
// const location1 = cityCountry("Lahore", "Pakistan");
// const location2 = cityCountry("New York", "USA");
// const location3 = cityCountry("Paris", "France");

// console.log(location1);
// console.log(location2);
// console.log(location3);

// example 40

// function makeAlbum(artist: string, title: string, tracks?: number): Record<string, any> {
//     const album: Record<string, any> = {
//         artist: artist,
//         title: title,
//     };

//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }

//     return album;
// }

// Call the function to create three different album objects
// const album1 = makeAlbum("Artist1", "Album1");
// const album2 = makeAlbum("Artist2", "Album2", 12); // Including number of tracks
// const album3 = makeAlbum("Artist3", "Album3");

// Print the album objects
// console.log(album1);
// console.log(album2);
// console.log(album3);

// example 41


// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// let magician : string[] = ["Harry Potter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumbledore"];

// function show_magicians (magicians : string[]) {

//     magicians.forEach(element => {

//         console.log(element);

//     });
// }

// show_magicians(magician);

// example 42

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


// let magician : string[] = ["Harry Potter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumbledore"];

// function make_great (magicianArray : string[]) {

//     for (let i=0; i<magicianArray.length; i++ ) {

//          magician[i] = "The Great " + magicianArray[i]
//     }
// }

// function show_magicians (magicians : string[]) {

//     magicians.forEach(element => {

//         console.log(element);

//     });
// }

// make_great(magician);

// show_magicians(magician);

// example 43

// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// let magician : string[] = ["Harry Potter" , "Hermione Granger" , "Ron Weasley" , "Albus Dumbledore"];

// function copyArray (arr : string[]) {
//      return [...arr]
// }


// function make_great (magicianArray : string[]) {

//     for (let i=0; i<magicianArray.length; i++ ) {

//           magicianArray[i] = "The Great " + magicianArray[i]
//     }
// }

// function show_magicians (magicians : string[]) {

//     magicians.forEach(element => {

//         console.log(element);

//     });
// }

// const copyMagicianArray = copyArray(magician);

// make_great(copyMagicianArray);

// console.log("\n\nThis is my orignal array:")
// show_magicians(magician);

// console.log("\n\nThis is my modified copy of the array:")
// show_magicians(copyMagicianArray);


// example 44

// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.


// function makeSandwich (item : string[]) {

//     console.log("\nMaking your sandwich with:");

//     item.forEach(element => console.log("- " + element));

//     console.log("Enjoy your sandwich !\n");
// }

// makeSandwich(["Ham","Cheese","Lettuce"]);

// makeSandwich(["Turkey","Bacon"]);

// makeSandwich(["Peanut butter","Jelly"]);

// example 45

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored corre

// function storeCarInfo(manufacturer: string , modelName: string , ...extraOption: { [key: string]: any} []) : object  {

//     const carInfo = {
//         manufacturer,
//         modelName,
//         ...Object.assign({}, ...extraOption)
//     }

//     return carInfo;
// };

// let answer = storeCarInfo("Honda", "Civic", {colour:"black"}, {features: ["navigation" , "Power window"]});

// console.log(answer);
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// console.log("45 ASSIGMENT HAS BEEN COMPLETED--------");


























