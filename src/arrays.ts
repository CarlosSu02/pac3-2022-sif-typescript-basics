
const names: string[] = [];

// names.push('Luke');
// names.push('Leia');

// names.forEach(names => `Name: ${console.log(names)}`);

const printNames = () => {

    names.push('Luke', 'Leia', 'Anakin', 'Padme', 'Yaddle');
    // names.push('Leia');
    
    names.forEach(names => console.log(`Name: ${names}`));
    // names.forEach((names, index) => console.log(`Name #${index + 1}: ${names}`));

}

const countPositions = () => {

    console.log(`\nThe number of names is: ${names.length}`);

}

export { printNames, countPositions };
