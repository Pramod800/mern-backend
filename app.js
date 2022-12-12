const express = require("express");
const app = express();
app.use(express.json());

var cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));

// const userroute = require("./routes/userRoute");
// app.use(userroute);

// const postroute = require("./routes/postRoute");
// app.use(postroute);

require("./database/db");
app.listen("90");
