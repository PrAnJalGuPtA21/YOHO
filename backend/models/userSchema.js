const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // require: true
    },
    email: {
        type: String,
        // require: true
    },
    hostelname: {
        type: String,
        // require: true
    },
    phone: {
        type: Number,
        // require: true
    },
    unique_id: {
        type: String,
        // require: true,
        // unique: true
    },
    issue: {
        type: String,
        // require: true
    },
    time: {
        type: String,
        // require: true
    },

    roomnumber: {
        type: Number,
        // require: true
    },

    description: {
        type: String,
        // require: true
    }
});

const users=new mongoose.model("complain",userSchema);
module.exports=users;