import { graphql } from 'react-relay';

export const IssueListItemFragment = graphql`
  fragment fragmentIssueListItem_IssueFragment on issues {
    nodeId
    id
    title
    status
    priority
    created_at
    users {
      nodeId
      id
      name
      avatar_url
    }
    issue_labelsCollection(first: 5) {
      edges {
        node {
          nodeId
          labels {
            nodeId
            id
            name
            color
          }
        }
      }
    }
  }
`;
export const IssueListFragment = graphql`
  fragment fragmentIssueList_IssueListFragment on Query
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
          ...fragmentIssueListItem_IssueFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
