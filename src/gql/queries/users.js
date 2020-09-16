import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query users {
    users {
      statusCode
      message
      payload {
        ... on User {
          id
          email
          name
          active
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query userPosts($id: String!) {
    userPosts(userId: $id) {
      message
      statusCode
      payload {
        ... on Post {
          id
          title
          content
          type
          active
          created_date
          modified_date
        }
      }
    }
  }
`;
export const USER_BLOCK = gql`
  query blockUser($id: String!) {
    blockUser(userId: $id) {
      statusCode
      payload {
        ... on User {
          id
          email
          name
          username
          active
        }
      }
    }
  }
`;

export const UN_BLOCK_USER = gql`
  query unblockUser($id: String!) {
    unblockUser(userId: $id) {
      statusCode
      payload {
        ... on User {
          id
          email
          name
          username
          active
        }
      }
    }
  }
`;
