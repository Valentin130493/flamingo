import { graphql } from 'react-relay';

export const IssueAssigneeFragment = graphql`
  fragment IssueAssignee_user on users {
    nodeId
    id
    name
    avatar_url
  }
`;
