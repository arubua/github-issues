import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    viewer {
      name
      avatarUrl
      id
      bio
      email
      openIssues: issues(states: [OPEN]) {
        totalCount
      }
      closedIssues: issues(states: [CLOSED]) {
        totalCount
      }
      issues(first: 10, states: [OPEN, CLOSED]) {
        totalCount
        edges {
          node {
            id
            number
            title
            author {
              login
              avatarUrl
            }
            createdAt
            closedAt
            comments {
              totalCount
            }
            state
            body
            url
          }
        }
      }
    }
  }
`;

export const GET_ISSUES = gql`
  {
    viewer {
      issues(first: 100) {
        edges {
          node {
            id
            number
            title
            author {
              login
              avatarUrl
            }
            createdAt
            closedAt
            comments {
              totalCount
            }
            state
            body
            url
          }
        }
      }
    }
  }
`;

export const SEARCH_REPO = gql`
  query SearchRepo($query: String!) {
    search(query: $query, type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            id
            name
            nameWithOwner
            owner {
              login
            }
            description
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export const GET_REPO_ISSUES = gql`
  query IssueQuery($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(first: 50, states: [OPEN]) {
        totalCount
        edges {
          node {
            id
            number
            title
            author {
              login
              avatarUrl
            }
            createdAt
            comments {
              totalCount
            }
            state
            body
            url
          }
        }
      }
      closedIssues: issues(first: 50, states: [CLOSED]) {
        totalCount
        edges {
          node {
            id
            number
            title
            author {
              login
              avatarUrl
            }
            closedAt
            comments {
              totalCount
            }
            state
            body
            url
          }
        }
      }
    }
  }
`;

export const GET_COMMENTS = gql`
  query CommentsQuery($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      issue(number: $number) {
        author {
          avatarUrl
          login
        }
        createdAt
        number
        bodyText
        bodyHTML
        comments(first: 10) {
          totalCount
          edges {
            node {
              author {
                avatarUrl
                login
                url
              }
              body
              bodyText
              bodyHTML
              createdAt
              id
              issue {
                number
              }
              repository {
                name
              }
              url
            }
          }
        }
      }
    }
  }
`;
