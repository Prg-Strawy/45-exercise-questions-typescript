"use strict";
console.log("Hello world");
//Question no1 : typescript, node.js and vs code installed
//Question no2
let userName = "Eric";
console.log("Hello " + userName + ", are you busy programming ?");
//Question no3 
const personName = "Ahmed Bin Khalid";
console.log(personName);
console.log('Lowercase :', personName.toLowerCase());
console.log('Uppercase :', personName.toUpperCase());
//console.log ('Titlecase :', personName.toTitlecase());
console.log('Titlecase :', personName.replace(/\b\w/g, (char) => char.toUpperCase()));
//Question no.4
//“I would much rather be hated for who I am, than loved for something that I am not.” -CM Punk
console.log("Once CM Punk said, “I would much rather be hated for who I am, than loved for something that I am not.”");
//Question no.5
const famous_person = "CM Punk";
let quote = "I would much rather be hated for who I am, than loved for something that I am not.";
let message = `Once ${famous_person} said, "${quote}" `;
console.log(message);
//Question no 6
//name with whitespaces
let personName2 = "\n \t   Jaweria Arshad   ";
console.log(personName2);
//name without whitespaces
let stripped_name = personName2.trim();
console.log(stripped_name);
//Question no 7
console.log(5 + 3); //addition
console.log(20 - 12); //subtraction
console.log(8 * 1); //multiplication
console.log(16 / 2); //division
//Question no 8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//Question no.9
let fav_number = 7;
let reveal = `Your favourite number is ${fav_number}`;
console.log(reveal);
//Question no 10 : Comments Added
//Question no 11
let friend_names = ["Hamza", "Hassan", "Zaki", "Ayan"];
console.log("Names of friends :");
for (let i = 0; i < friend_names.length; i++) {
    console.log(friend_names[i]);
}
//Question no 12
//let permess = "Hi NAM ! how are you?";
console.log("Message to my friends:");
for (let j = 0; j < friend_names.length; j++) {
    let personal_message = `Hi ${friend_names[j]}! How Are You Today ?`;
    //let personal_message= permess.replace("NAM",friend_names[j]);
    console.log(personal_message);
}
//Question no 13
let vehicles = ["Audi", "Yamaha R1", "Honda Civic", "Toyota Fortuner"];
for (let i = 0; i < vehicles.length; i++) {
    console.log(`I would like to own ${vehicles[i]}`);
}
//Question no 14
let guest = ["Hamza", "Hassan", "Zaki", "Ayan"];
for (let i = 0; i < guest.length; i++) {
    let invite_template = "Hey guest! I am inviting you to my dinner party. Come Join Me!";
    let invite = invite_template.replace("guest", guest[i]);
    console.log(invite);
}
//Question no 15
let unable_attend = "Ayan";
guest.forEach(guest => {
    if (guest != unable_attend) {
        console.log(`${guest} is coming to party`);
    }
});
console.log(`${unable_attend} could'nt attend the party`);
let new_guest = "Daniyal";
guest = guest.map(guest => guest == unable_attend ? new_guest : guest);
guest.forEach(guest => { console.log("Dear " + guest + ", you are cordially invited to my party"); });
//Question no 16
console.log("We have a bigger table now for more guests!");
guest.unshift("Yousuf");
guest.splice(Math.ceil(guest.length / 2), 0, "Anas");
guest.push("Hussain");
guest.forEach(guest => { console.log(`Dear ${guest}! you are welcomed in my party`); });
//Question no 17
console.log("With utmost sorrow I announce that I need to shrink the list due to dinner table not arriving on time");
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log("Sorry! " + removedGuest + ", I could'nt invite you to party anymore");
}
guest.forEach(guest => { console.log("You are still invited, Mr." + guest); });
//Question no 18
let dream_place = ["Japan", "Alaska", "Saudia Arabia", "Dubai", "Switzerland"];
dream_place.forEach(dream_place => console.log(dream_place));
//alphabetical order without modifying org list
let sorted_str = [...dream_place].sort((a, b) => a.localeCompare(b));
sorted_str.forEach(sorted_str => console.log(sorted_str));
//reverse alpha.order without modifying org list
let sorted_str2 = [...dream_place].sort((a, b) => b.localeCompare(a));
sorted_str2.forEach(sorted_str2 => console.log(sorted_str2));
//reversing array list
dream_place.reverse();
console.log(dream_place);
//reversing again such that array is in its original form
dream_place.reverse();
console.log(dream_place);
//sorted array inalphabetical order
dream_place.sort();
console.log(dream_place);
//sorted in reverse alphabteical order
dream_place.sort((a, b) => b.localeCompare(a));
console.log(dream_place);
/*Question no 19
    From Exe 14-17 ; Printing the number of guest that are invited after removals and additions etc.
    */
console.log("Finally, we were able to invite " + guest.length + " guest/s to our party");
function createCountryList(countries) {
    return countries;
}
const CountryList = createCountryList(["Pakistan", "Palestine", "Japan"]);
console.log("Countries:", CountryList);
//Question No21
let person = {
    name_p: "Ahmed",
    age: "18",
    IsStudent: true,
};
console.log(person.name_p);
console.log(person.age);
//Question no 22
let arr1 = [1, 2, 3];
console.log(arr1[3]);
//Question no 23
let car = 'subaru';
//Test 1 : Equality Comparison
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
//Test 2 : Inequality Comparison
console.log("Is car != 'subaru'? I predict False.");
console.log(car != 'subaru'); //False
//Test 3 : Strict Equality Comparison
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //True
//Test 4 : Strict Inequality Comparison
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); //False
//Test 5 : Greater Than Comparison
console.log("Is car > 'subaru'? I predict False.");
console.log(car > 'subaru');
//Test 6 : Greater Than or Equal To Comparison
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');
//Test 7 : Less Than Comparison
console.log("Is car < 'subaru'? I predict False.");
console.log(car < 'subaru');
//Test 8 : Less Than or Equal To Comparison
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');
//Question no 24
let sports = "cricket";
//Test for equality
console.log("Sports equal to cricket ");
console.log(sports == "cricket");
//Test for inequality
console.log("Sports not equal to cricket ");
console.log(sports != "cricket");
//Test using lower case function
let uppercase = "CRICKET";
console.log("CRICKET is equal to cricket after converting in lowercase ");
console.log(uppercase.toLowerCase() == "cricket");
console.log("CRICKET is  not equal to cricket after converting in lowercase ");
console.log(uppercase.toLowerCase() != "cricket");
//Numerical test
let num1 = 15;
let num2 = 10;
//greater than
console.log("The number 15 is greater than 10");
console.log(num1 > 10); //true
console.log("The number 10 is greater than 10");
console.log(num2 > 10); //false
//less than
console.log("The number 10 is less than 13");
console.log(num2 < 13); //true
console.log("The number 15 is less than 13");
console.log(num1 < 13); //false
//greater than equal to
console.log("The number 15 is greater than or equal to  15");
console.log(num1 >= 15); //true
console.log("The number 10 is greater than or equal to 13");
console.log(num2 >= 13); //false
//less than or equal to 
console.log("The number 10 is less than or equal to 13");
console.log(num2 <= 13); //true
console.log("The number 15 is less than or equal to 13");
console.log(num1 <= 13); //false
//Test Using `AND` and `OR` operators
console.log(num1 == num2 && num1 != num2); //false
console.log(num1 == num2 || num1 != num2); //true
//Test whether an item is in an array
let testarray = ['apple', 'banana', 'mango'];
console.log("The mango is in the array: ", testarray.includes('mango'));
//Test whether an item is not in an array
console.log("The orange is in the array: ", testarray.includes('orange'));
//Question no 25
let alien_color = "green";
if (alien_color == "green") {
    console.log("Player just earned 5 points");
}
else {
    console.log("nothing");
}
//another version of the code i.e if test fails
if (alien_color == "red") {
    console.log("You just earned 5 points");
}
else {
    console.log("no output");
}
//Question no 26
if (alien_color == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color == "red" || alien_color == "yellow") {
    console.log("Player just earned 10 points");
}
else {
    console.log("no output");
}
//Question no 27
//version 1
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color1 == "red") {
    console.log("Player just earned 10 points");
}
else if (alien_color1 == "yellow") {
    console.log("Player just earned 15 points");
}
else {
    console.log("no output");
}
//version 2 
let alien_color2 = "red";
if (alien_color2 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color2 == "red") {
    console.log("Player just earned 10 points");
}
else if (alien_color2 == "yellow") {
    console.log("Player just earned 15 points");
}
else {
    console.log("no output");
}
//version 3
let alien_color3 = "yellow";
if (alien_color3 == "green") {
    console.log("Player just earned 5 points");
}
else if (alien_color3 == "red") {
    console.log("Player just earned 10 points");
}
else if (alien_color3 == "yellow") {
    console.log("Player just earned 15 points");
}
else {
    console.log("no output");
}
//Question no 28
let person_age = 18;
if (person_age < 2) {
    console.log("Person is a baby");
}
else if (person_age >= 2 && person_age < 4) {
    console.log("Person is a toddler");
}
else if (person_age >= 4 && person_age < 13) {
    console.log("Person is a kid");
}
else if (person_age >= 13 && person_age < 20) {
    console.log("Person is a teenager");
}
else if (person_age >= 20 && person_age < 65) {
    console.log("Person is an adult");
}
else {
    console.log("Person is an elder");
}
//Question no 29
let fav_fruits = ["Apple", "Mango", "Watermelon"];
if (fav_fruits.includes("Mango")) {
    console.log("You can't live without mangoes");
}
if (fav_fruits.includes("Banana")) {
    console.log("You can't live without bananas");
}
if (fav_fruits.includes("Apple")) {
    console.log("You can't live without apples");
}
if (fav_fruits.includes("Orange")) {
    console.log("You can't live without oranges");
}
if (fav_fruits.includes("Watermelon")) {
    console.log("You can't live without watermelons");
}
//Question no 30
let users = ["Kamil", "Amna", "Admin", "Saadi", "Ali"];
users.forEach(x => {
    if (x == "Admin") {
        console.log(`Hello ${x}, would you like to see a status report ? `);
    }
    else {
        console.log(`Hello ${x}, thank you for logging in again.`);
    }
});
//Question no 31
if (users.length == 0) {
    console.log("We need to find some user");
}
else {
    users.forEach(x => {
        if (x == "Admin") {
            console.log(`Hello ${x}, would you like to see a status report ? `);
        }
        else {
            console.log(`Hello ${x}, thank you for logging in again.`);
        }
    });
}
users = [];
if (users.length == 0) {
    console.log("We need to find some user");
}
else {
    users.forEach(x => {
        if (x == "Admin") {
            console.log(`Hello ${x}, would you like to see a status report ? `);
        }
        else {
            console.log(`Hello ${x}, thank you for logging in again.`);
        }
    });
}
//Question no 32
let current_users = ["Hassan", "Hussain", "Hamza", "Huzaifa", "Haris"];
let new_users = ["Ahmed", "Hamza", "hassan", "Ali", "Abdul"];
new_users.forEach(new_one => {
    let condition = current_users.some(current_one => current_one.toLowerCase() == new_one.toLowerCase());
    if (condition) {
        console.log(`Sorry, ${new_one} is already taken`);
    }
    else {
        console.log(`The username ${new_one} is available`);
    }
});
//Question no 33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let oneNum of numbers) {
    let ordinalEnd;
    if (oneNum == 1) {
        ordinalEnd = "st";
    }
    else if (oneNum == 2) {
        ordinalEnd = "nd";
    }
    else if (oneNum == 3) {
        ordinalEnd = "rd";
    }
    else {
        ordinalEnd = "th";
    }
    console.log(`${oneNum}${ordinalEnd}`);
}
//Question no 34
let pizza = ["Fajita", "Habernaro", "Tikka"];
for (let Onepiz of pizza) {
    console.log(`I like ${Onepiz} pizza`);
}
console.log("I love Pizza");
//Question no 35
let animals = ["Dog", "Cat", "Parrot"];
for (let pet of animals) {
    console.log(`A ${pet} would make a great pet`);
}
console.log("Any of these would make a great pet");
//Question no 36
function make_shirt(size, printMsg) {
    console.log(`You selected ${size} size with ${printMsg} printed on your shirt`);
}
make_shirt("Medium", "Be happy");
//Question no 37
function make_shirt1(size = "Large", printMsg = "I love Typescript") {
    console.log(`You selected ${size} size with ${printMsg} printed on your shirt`);
}
make_shirt1();
make_shirt1("Medium");
make_shirt1("small", "I love myself");
//Question no 38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Kyoto", "Japan");
//Question no 39
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//Question no 40
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks != undefined) {
        album.tracks = tracks;
    }
    return album;
}
make_album("Abdul", "Title 1");
console.log(make_album("Abdul", "Title 1"));
let album2 = make_album("Ali", "Title 2");
let album3 = make_album("Zafar", "Title 3", 7);
console.log(album2);
console.log(album3);
//Question no 41
function show_magician(magician) {
    magician.forEach(name => console.log(name));
}
let magician_name = ["Ahmed", "Asif", "Amir"];
show_magician(magician_name);
//Question no 42
function make_great(magician) {
    return magician.map(name => `The Great ${name}`);
}
//console.log(make_great(magician_name));
show_magician(make_great(magician_name));
//Question no 43
let copy_magician_name = magician_name.slice();
let copy_great_magician = make_great(copy_magician_name);
console.log("Original Array: ");
show_magician(magician_name);
console.log("Copied Array: ");
show_magician(copy_great_magician);
//Question no 44
function makeSandwitch(...items) {
    console.log("Making a sandwitch with the followings: ");
    items.forEach(singleItem => console.log(singleItem));
    console.log("Enjoy :)");
}
;
makeSandwitch("Bread", "Butter");
makeSandwitch("chicken", "cheese", "egg");
makeSandwitch("bread", "Tomato", "cabbage", "cheese");
//Question no 45
function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
let my_car = car_info("Toyota", "Corolla", "Color : Black", "Sunroof: true");
console.log(my_car);
