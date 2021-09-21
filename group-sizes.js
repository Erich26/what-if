const prompt = require('prompt-sync')();

const classsize = Number(prompt('Please enter your class size: '));
const groupsize = 3;
const remaininggroups = 2;

const groups = classsize / groupsize;


const i = classsize % groupsize;
const i2 = classsize - i; 
const solution = i2 / groupsize;

const almost = solution / remaininggroups;

const nearly = (solution * 3) - (almost * remaininggroups);
const groupsthree = nearly / groupsize;
const groupstwo = (classsize - nearly) / remaininggroups;

if (groups % 3 === 0 ) {
    console.log('Groups of three: ', groups );
} 
else {
    console.log('Groups of three: ', groupsthree, 'Groups of two: ', groupstwo )
}




