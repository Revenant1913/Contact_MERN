const mongoose = require("mongoose")

const USerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name required."],
    },
    email: {
        type: String,
        required: [true, "email required"],
    },
    password: {
        type: String,
        required: [true, "password required"],
    },
});

