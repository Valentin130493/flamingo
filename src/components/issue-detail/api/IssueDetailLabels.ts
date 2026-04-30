import { graphql } from 'react-relay';

export const IssueDetailLabelsFragment = graphql`
  fragment IssueDetailLabels_issue on issues {
    nodeId
    id
    issue_labelsCollection(first: 20) {
      edges {
        node {
          nodeId
          label_id
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

export const IssueDetailLabelsAddMutation = graphql`
  mutation IssueDetailLabelsAddMutation($issue_id: UUID!, $label_id: UUID!) {
    insertIntoissue_labelsCollection(objects: [{ issue_id: $issue_id, label_id: $label_id }]) {
      records {
        nodeId
        issue_id
        label_id
      }
    }
  }
`;

export const IssueDetailLabelsRemoveMutation = graphql`
  mutation IssueDetailLabelsRemoveMutation($issue_id: UUID!, $label_id: UUID!) {
    deleteFromissue_labelsCollection(
      filter: { issue_id: { eq: $issue_id }, label_id: { eq: $label_id } }
    ) {
      records {
        nodeId
        issue_id
        label_id
      }
    }
  }
`;
