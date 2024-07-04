/* More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var guestList = ["Aiman", "Gulnaz", "Nimra"];
console.log("Great News! We found a bigger table");
//unshift
guestList.unshift("Laiba");
console.log(guestList);
//Splice
guestList.splice(Math.floor(guestList.length / 2), 0, "Ali");
console.log(guestList);
//push
guestList.push("Manahil");
console.log(guestList);
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",You are invited to Dinner"));
});
