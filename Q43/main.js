function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicians_name = ["Namal", "Tehreem", "hajra", "Humail"];
var copy_magicians_names = magicians_name.slice();
var copy_great_magician = make_great(copy_magicians_names);
console.log("\nOriginal Array\n");
show_magicians(magicians_name);
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
