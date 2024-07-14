"use strict";
let current_users = ["Aiman", "Gulnaz", "Muskan", "Nimra"];
let new_users = ["Tehreem", "Hajra", "Humail", "Manahil"];
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is Already Taken!`);
    }
    else {
        console.log(`This UserName ${new_one_user} is available`);
    }
    ;
});
