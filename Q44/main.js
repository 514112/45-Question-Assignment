function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a Sandwich with the following items");
    items.forEach(function (singleItem) {
        return console.log(singleItem);
    });
    console.log("Lets Enjoy Your Sandwich!");
}
makeSandwich("Bread", "Butter");
makeSandwich("Mayo", "Chicken", "Egg");
makeSandwich("Bread", "Butter", "Egg", "Mayo", "Chicken", "Cheese");
