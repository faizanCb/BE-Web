import { gql } from '@apollo/client';

export const NEW_USER = gql`
    mutation newUser($name: String!, $email: String!, $password: String!){
        newUser(name: $name, email: $email, password: $password){
            id,
            name,
            email,
            label
        }
    }
`;

export const ADMIN_SIGNUP = gql`
mutation 
signup($name: String!, $username: String!, $email: String!, $password: String!){
signup(name: $name, username: $username, email: $email, password: $password){
statusCode,
  message,
  payload {
    ... on User {
      id,
      name
    }
  }
}
}
`

export const ADMIN_LOGIN = gql`
mutation 
login($username: String!, $password: String!){
login(username: $username, password: $password){
  message
  statusCode
  payload {
    ... on AuthToken {
      type
      token
    }
  }
}
}
`