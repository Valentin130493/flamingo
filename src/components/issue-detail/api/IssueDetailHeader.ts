import { graphql } from 'react-relay';

export const IssueDetailHeaderFragment = graphql`
  fragment IssueDetailHeader_issue on issues {
    nodeId
    id
    title
    status
    priority
    created_at
  }
`;

export const IssueDetailHeaderUpdateTitleMutation = graphql`
  mutation IssueDetailHeaderUpdateTitleMutation($id: UUID!, $title: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { title: $title }) {
      records {
        nodeId
        id
        title
      }
    }
  }
`;

export const IssueDetailHeaderUpdateStatusMutation = graphql`
  mutation IssueDetailHeaderUpdateStatusMutation($id: UUID!, $status: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { status: $status }) {
      records {
        nodeId
        id
        status
      }
    }
  }
`;

export const IssueDetailHeaderUpdatePriorityMutation = graphql`
  mutation IssueDetailHeaderUpdatePriorityMutation($id: UUID!, $priority: String!) {
    updateissuesCollection(filter: { id: { eq: $id } }, set: { priority: $priority }) {
      records {
        nodeId
        id
        priority
      }
    }
  }
`;
