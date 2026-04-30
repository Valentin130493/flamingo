import { graphql } from 'react-relay';

export const mutationUpdateIssueBodyMutation = graphql`
  mutation mutationIssueDetailBodyUpdateMutation($id: UUID!, $description: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { description: $description }) {
      records {
        nodeId
        id
        description
      }
    }
  }
`;

export const UpdateIssueTitleMutation = graphql`
  mutation mutationIssueDetailHeaderTitleMutation($id: UUID!, $title: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { title: $title }) {
      records {
        nodeId
        id
        title
      }
    }
  }
`;

export const UpdateIssueStatusMutation = graphql`
  mutation mutationIssueDetailHeaderStatusMutation($id: UUID!, $status: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { status: $status }) {
      records {
        nodeId
        id
        status
      }
    }
  }
`;

export const UpdateIssuePriorityMutation = graphql`
  mutation mutationIssueDetailHeaderPriorityMutation($id: UUID!, $priority: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { priority: $priority }) {
      records {
        nodeId
        id
        priority
      }
    }
  }
`;

export const AddLabelMutation = graphql`
  mutation mutationIssueLabelsAddMutation($issue_id: UUID!, $label_id: UUID!) {
    insertIntoissue_labelsCollection(objects: [{ issue_id: $issue_id, label_id: $label_id }]) {
      records {
        nodeId
        issue_id
        label_id
      }
    }
  }
`;

export const RemoveLabelMutation = graphql`
  mutation mutationIssueLabelsRemoveMutation($issue_id: UUID!, $label_id: UUID!) {
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
export const AddCommentMutationDoc = graphql`
  mutation mutationAddCommentMutation($issue_id: UUID!, $author_id: UUID!, $body: String!) {
    insertIntocommentsCollection(
      objects: [{ issue_id: $issue_id, author_id: $author_id, body: $body }]
    ) {
      records {
        nodeId
        id
        issue_id
        body
        author_id
        created_at
        users {
          nodeId
          id
          name
          avatar_url
        }
      }
    }
  }
`;
