const prompt = require('prompt-sync')();

const weight = Number(prompt('Please enter your weight: '));
const planet = Number(prompt('Please enter the number 1-6 correlating with your planet: '));
const venus = 0.78
const mars = 0.39
const jupiter = 2.65
const saturn = 1.17
const uranus = 1.05
const neptune = 1.23




if (planet === 1) {
    const result = weight * venus;
    console.log('Venus: ', result);
}

else if (planet === 2) {
    const result = weight * mars;
    console.log('Mars: ', result);
}

else if (planet === 3) {
    const result = weight * jupiter;
    console.log('Jupiter: ', result)
}

else if (planet === 4) {
    const result = weight * saturn;
    console.log('Saturn: ', result)
}

else if (planet === 5) {
    const result = weight * uranus;
    console.log('Uranus: ', result)
}

else if (planet === 6) {
    const result = weight * neptune;
    console.log('Neptune: ', result)
}