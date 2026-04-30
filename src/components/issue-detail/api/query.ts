import { graphql } from 'react-relay';

export const IssueDetailQueryDoc = graphql`
  query queryIssueDetailQuery($id: UUID!, $issueId: UUID!) {
    issuesCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          nodeId
          id
          ...fragmentIssueDetailHeader_IssueFragment
          ...fragmentIssueDetailBody_IssueFragment
          ...fragmentIssueLabels_IssueFragment
          users {
            ...fragmentIssueAssignee_AssigneeFragment
          }
        }
      }
    }
    ...fragmentCommentThreadFragment @arguments(issueId: $issueId)
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
