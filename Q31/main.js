"use strict";
/* No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
let UserNames = ["Aerish", "Uzaif", "Admin", "Namal", "Ishal"];
UserNames = [];
if (UserNames.length === 0) {
    console.log("We need to find some users");
}
else {
    UserNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, Would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, Thank you for logging in again.`);
        }
        ;
    });
}
;
