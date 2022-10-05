import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!, $firstname: String!, $lastname: String!) {
    addUser(username: $username, email: $email, password: $password, firstname: $firstname, lastname: $lastname) {
      token
      user {
        username
        email
      }
    }
  }
`;

export const ADD_POST = gql``;

export const REMOVE_POST = gql``;

