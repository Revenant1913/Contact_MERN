const mongoose = require("mongoose");

const connectDB = async () => {
    return mongoose.connect("mongodb://localhost/contact_mern")
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
}

module.exports = connectDB;