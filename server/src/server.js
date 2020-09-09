const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3001;

let ulrBD = 'mongodb://localhost:27017/nameRamdon';
ulrBD = "mongodb+srv://berserker:berserker123@cluster0.jbua3.mongodb.net/nameRamdon?retryWrites=true&w=majority";

mongoose.connect(ulrBD, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  server: { poolSize: 3 },
});

const app = express();
app.use(morgan());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes"));

app.listen(port, () => {
  console.clear();
  console.log("Runing on port => ", port);
});
