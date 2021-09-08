const names = ["Joe", "Caroline", "Mario"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful gift!`);
        }
        return names;
}


writeCards(names);
