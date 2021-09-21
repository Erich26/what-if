const prompt = require('prompt-sync')();

const day = Number(prompt('Please enter a number of 1-7: '));

if (day === 1 ) {
    console.log('It is Monday.')
}

else if (day === 2) {
    console.log('It is Tuesday.')
}

else if (day === 3) {
    console.log('It is Wednesday.')
}

else if (day === 4) {
    console.log('It is Thursday.')
}

else if (day === 5) {
    console.log('It is Friday.')
}

else if (day === 6) {
    console.log('It is Saturday.')
}

else if (day === 7) {
    console.log('It is Sunday.')
}

else {
    console.log('Error! Your computer will self destruct in 1 second.')
}