const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


const TagSchema = new Schema(
  {
    tagname: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Tag = model("Tag", TagSchema);

module.exports = Tag;
