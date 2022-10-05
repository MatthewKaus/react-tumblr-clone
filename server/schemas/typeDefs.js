const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    postCount: Int
    posts: [Post]
  }

  type Post {
    title: String
    body: String
    image: String
    tags: [Tag]
    comments: [Comment]
  }

  type Tag {
    tagname: String
  }

  type Comment {
    commentbody: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input postInput {
    title: String
    image: String
    body: String
  }

  input tagInput {
    tagname: String
  }

  input CommentInput {
    commentbody: String
    username: String
  }

  type Query {
    me: User
    feed: [Post]

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(input: postInput): Post
    removePost(_id: ID!): User
  }
`;

module.exports = typeDefs;
