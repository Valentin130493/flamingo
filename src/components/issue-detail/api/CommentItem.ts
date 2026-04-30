import { graphql } from 'react-relay';

export const CommentItemFragment = graphql`
  fragment CommentItem_comment on comments {
    nodeId
    id
    body
    created_at
    users {
      nodeId
      id
      name
      avatar_url
    }
  }
`;
