const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Routes
const polls = require("./routes/poll");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config

app.use("/api/polls", polls);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
