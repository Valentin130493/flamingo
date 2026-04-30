import { graphql } from 'react-relay';

export const IssueListItemFragment = graphql`
  fragment IssueListItem_issue on issues {
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

export const IssueListItemUpdateStatusMutation = graphql`
  mutation IssueListItemUpdateStatusMutation($id: UUID!, $status: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { status: $status }) {
      records {
        nodeId
        id
        status
      }
    }
  }
`;
