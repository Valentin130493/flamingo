import { graphql } from 'react-relay';

export const IssueListDocQuery = graphql`
  query queryIssueListQuery($filter: issuesFilter, $first: Int) {
    ...fragmentIssueList_IssueListFragment @arguments(filter: $filter, first: $first)
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
