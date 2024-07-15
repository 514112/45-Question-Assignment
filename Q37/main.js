"use strict";
function make_shirt(size = "Large", PrintMessage = "I Love My Self") {
    console.log(`Creating a ${size} shirt with the ${PrintMessage} pprints on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love My Self");
