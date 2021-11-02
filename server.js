require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const usersRoute = require("./routes/users");
app.use("/users", usersRoute);

app.listen(process.env.PORT || 3000, () => console.log("server started"));
