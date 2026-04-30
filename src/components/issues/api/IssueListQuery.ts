import { graphql } from 'react-relay';

export const IssueListQuery = graphql`
  query IssueListQuery($filter: issuesFilter, $first: Int) {
    ...IssueList_query @arguments(filter: $filter, first: $first)
    labelsCollection(orderBy: [{ name: AscNullsLast }]) {
      edges {
        node {
          nodeId
          id
          name
          color
        }
      }
    }
  }
`;
