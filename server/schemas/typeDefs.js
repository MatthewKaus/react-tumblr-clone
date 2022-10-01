const {gql } = require('apollo-server-express');

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
    image: String
    body: String
}

type Auth {
    token: ID!
    user: User
}

input postInput{
    title: String
    image: String
    body: String
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, firstname: String!, lastname: String!): Auth
    addPost(input: postInput): User
    removePost(_id: ID!): User
}
`

module.exports = typeDefs;