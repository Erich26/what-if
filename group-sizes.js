const prompt = require('prompt-sync')();

const classsize = Number(prompt('Please enter your class size: '));

if (classsize % 3 === 0) {
   console.log(classsize / 3, 'Groups of three')
}

else if (classsize % 3 === 1) {
    numGroupsOfThree = (classsize - 4) / 3;
    numGroupsOfTwo = 2;
    console.log(numGroupsOfThree, 'Groups of three', numGroupsOfTwo, 'Groups of two');
}

else if (classsize % 3 === 2) {
    numGroupsOfThree = (classsize - 2) / 3;
    numGroupsOfTwo = 1;
    console.log(numGroupsOfThree, 'Groups of three', numGroupsOfTwo, 'Groups of two');
}
