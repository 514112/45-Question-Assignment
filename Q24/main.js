"use strict";
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
//Lower case function
let uppercaseTea = "Tea";
console.log("TEA is equal to tea after convert into lowerCase");
console.log(uppercaseTea.toLocaleLowerCase() == "Tea");
console.log("TEA is not equal to tea after convert into LowerCase");
console.log(uppercaseTea.toLocaleUpperCase() !== "tea");
//Numerical Test
//Test Equality & Inequality
let fifteen = 15;
let eight = 8;
console.log("Fifteen is equal to eight");
console.log(fifteen == 8);
console.log("Eight is not equal to fifteen");
console.log(eight !== 15);
//Test Greater than & less than
let five = 5;
let three = 3;
//Greater than
console.log("Five is greater than three");
console.log(five > 3);
//Less than
console.log("Five is less than three");
console.log(five < 3);
//Greater than or equal
console.log("Five is greater than or equal to three");
console.log(five >= 3);
//Less than or in equal 
console.log("Five is less than three or in equal to three");
console.log(five <= 3);
//• Tests using "and" and "or" operators
//Using && 
console.log("five is not equal to three and five is greater than three");
console.log(five !== 3 && five > 3);
console.log("five is equal to three && five is less than three");
console.log(five == 3 && five < 3);
//Using or
console.log("five is not equal to three or five is greater than three");
console.log(five !== 3 || five > 3);
console.log("five is equal to three or five is less than three");
console.log(five == 3 || five < 3);
//• Test whether an item is in a array
let friends = ["Namal", "Tehreem", "Hajra", "Humail"];
console.log("Namal is include in my array");
console.log(friends.includes("Namal"));
//• Test whether an item is not in a array */
console.log("Aiman is include in my array");
console.log(friends.includes("Aiman"));
