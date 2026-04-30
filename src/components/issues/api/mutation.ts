import { graphql } from 'react-relay';

export const UpdateStatusMutation = graphql`
  mutation mutationIssueListItemUpdateStatusMutation($id: UUID!, $status: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { status: $status }) {
      records {
        nodeId
        id
        status
      }
    }
  }
`;
