"use strict";
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
let magicians_name = ["Namal", "Tehreem", "hajra", "Humail"];
let copy_magicians_names = magicians_name.slice();
let copy_great_magician = make_great(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
