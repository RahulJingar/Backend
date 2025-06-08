const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;


// app.get('/', (req,res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("paul", salt, function(err, hash) {
//         console.log("i am salt");
//         console.log(salt);
//         //salt string password hota hain
//         console.log("i am hash");
//         console.log(hash);
//         // paul password tha jo ki long string password hain
//         // Store hash in your password DB.
//     });
// });
// })
app.get('/', (req,res) => {
bcrypt.compare("paul", "$2b$10$0MpXvkFNUd7SMocjL.Sdi.5uNGO7velqlRflKLtcmT2q./dB24m.", function(err, result) {
    console.log(result);
    // result == true
});
});

// })


app.listen(port);