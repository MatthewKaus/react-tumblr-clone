const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

// needs reaction for hearts and comments
const CommentSchema = new Schema({
  commentbody: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = CommentSchema;
