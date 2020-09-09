const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const tbl_people = new Schema({
  document: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  secret: {
    type: Schema.Types.ObjectId,
    ref: "tbl_people",
    default: null
  },
  king: {
    type: Schema.Types.ObjectId,
    ref: "tbl_people",
    default: null
  },
  state: {
    type: Boolean,
    default: true
  },
});

tbl_people.plugin( uniqueValidator, {message: 'persona ya registrada'})
module.exports = mongoose.model("tbl_people", tbl_people);
