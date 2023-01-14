'use strict'

console.log('Hello, world!');

// task 1

let sentenceText = 'You can ignore single and double quotes like this: \\\'\\\' \\\" \\\"';
console.log(sentenceText);

// task 2

let userName = prompt("Enter your name", '');
alert(`Your full name is: ${userName}`);
let userSurname = prompt("Enter your surname",'Surname');
alert(`Your full name is: ${userName}` + ` ` + `${userSurname}`);
let userAge = prompt("How old are you",'Age');
alert(`Your full name is: ${userName}` + ` ` + `${userSurname}, your age is: ${userAge} `);
let userAccess = confirm('Are you admin?');
let userMassegeFinish = alert(`Your full name is: ${userName}` + ` ` + `${userSurname}, admin status: ${userAccess}`);

