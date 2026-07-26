const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, "Username is required" ],
        unique: [ true, "Username must be unique" ]
    },
    email: {
        type: String,
        required: [ true, "Email is required" ],
        unique: [ true, "Email must be unique" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        select: false // by default this field wont be read. We write this so that in response password cant be seen 
        //but it will create problem while log-in. Therefore we write select+password in login function
    }
})

// TASK
// userSchema.pre("save", function (next) { })
// userSchema.post("save", function (next) { })


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;