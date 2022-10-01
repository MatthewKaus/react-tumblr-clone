const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

// needs reaction for hearts and comments

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = PostSchema;
