const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");

// needs reaction for hearts and comments
// const TagSchema = require("./Tag");
// const CommentSchema = require("./Comment");

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
  tags: { type: [TagSchema] },
  comments: [CommentSchema],
});

const Post = model('Post', PostSchema);

module.exports = Post;
