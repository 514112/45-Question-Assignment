//PRINT MESSAGE
var guestList = ["Aiman", "Gulnaz", "Manahil", "Muskan", "Nimra"];
console.log("Unfortunately! the dinner table wont arrive so we can invited only two guest");
//REMOVE GUEST
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, ",We can't invite you!"));
    }
}
;
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are still invited"));
});
//REMOVE LAST TWO NAMES
guestList.splice(0, guestList.length);
console.log("Updated list of guest", guestList);
