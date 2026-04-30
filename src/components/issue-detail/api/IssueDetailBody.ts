import { graphql } from 'react-relay';

export const IssueDetailBodyFragment = graphql`
  fragment IssueDetailBody_issue on issues {
    nodeId
    id
    description
  }
`;

export const IssueDetailBodyUpdateMutation = graphql`
  mutation IssueDetailBodyUpdateMutation($id: UUID!, $description: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { description: $description }) {
      records {
        nodeId
        id
        description
      }
    }
  }
`;
