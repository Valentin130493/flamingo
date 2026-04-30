import { graphql } from 'react-relay';

export const IssueListFragment = graphql`
  fragment IssueList_query on Query
  @refetchable(queryName: "IssueListRefetchQuery")
  @argumentDefinitions(
    first: { type: "Int", defaultValue: 20 }
    after: { type: "Cursor" }
    filter: { type: "issuesFilter" }
  ) {
    issuesCollection(
      filter: $filter
      first: $first
      after: $after
      orderBy: [{ created_at: DescNullsLast }]
    ) @connection(key: "IssueList_issuesCollection") {
      edges {
        node {
          nodeId
          ...IssueListItem_issue
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
