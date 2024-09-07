const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  wfp: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
});

const Item = mongoose.model("item", itemSchema);

module.exports = Item;
