const express = require('express')
const morgan = require('morgan')

const connectDB = require("./config/db");

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("tiny"));

//routes
app.use("/api", require("./routes/auth"));

//server config
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    await connectDB(); //api won't execute before db connection
    console.log("sever running")}); 