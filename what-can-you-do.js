const prompt = require('prompt-sync')();

const age = Number(prompt('Please enter your age: '));

if (age < 16 ) {
    console.log('You cannot drive.');
} else if (age >= 16 && age <=17 ) {
     console.log('You can drive but not vote.')
} else if (age >= 18 && age <=24 ) {
    console.log('You can vote but not rent a car.')
} else {
    console.log('You can do pretty much anything.')
}
