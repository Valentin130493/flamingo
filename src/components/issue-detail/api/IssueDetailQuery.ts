import { graphql } from 'react-relay';

export const IssueDetailQuery = graphql`
  query IssueDetailQuery($id: UUID!, $issueId: UUID!) {
    issuesCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          nodeId
          id
          ...IssueDetailHeader_issue
          ...IssueDetailBody_issue
          ...IssueDetailLabels_issue
          users {
            ...IssueAssignee_user
          }
        }
      }
    }
    ...CommentThread_query @arguments(issueId: $issueId)
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
