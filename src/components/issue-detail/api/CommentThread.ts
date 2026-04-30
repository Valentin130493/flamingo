import { graphql } from 'react-relay';

export const CommentThreadFragment = graphql`
  fragment CommentThread_query on Query
  @refetchable(queryName: "CommentThreadRefetchQuery")
  @argumentDefinitions(
    issueId: { type: "UUID!" }
    first: { type: "Int", defaultValue: 20 }
    after: { type: "Cursor" }
  ) {
    commentsCollection(
      filter: { issue_id: { eq: $issueId } }
      first: $first
      after: $after
      orderBy: [{ created_at: AscNullsFirst }]
    ) @connection(key: "CommentThread_commentsCollection") {
      edges {
        node {
          nodeId
          ...CommentItem_comment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const CommentThreadAddCommentMutation = graphql`
  mutation CommentThreadAddCommentMutation($issue_id: UUID!, $author_id: UUID!, $body: String!) {
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
