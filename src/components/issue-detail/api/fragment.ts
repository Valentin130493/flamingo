import { graphql } from 'react-relay';

export const CommentItemFragment = graphql`
  fragment fragmentCommentItem_CommentFragment on comments {
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

export const CommentThreadFragment = graphql`
  fragment fragmentCommentThreadFragment on Query
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
          ...fragmentCommentItem_CommentFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const IssueAssigneeFragment = graphql`
  fragment fragmentIssueAssignee_AssigneeFragment on users {
    nodeId
    id
    name
    avatar_url
  }
`;

export const IssueDetailBodyFragment = graphql`
  fragment fragmentIssueDetailBody_IssueFragment on issues {
    nodeId
    id
    description
  }
`;

export const IssueDetailHeaderFragment = graphql`
  fragment fragmentIssueDetailHeader_IssueFragment on issues {
    nodeId
    id
    title
    status
    priority
    created_at
  }
`;

export const IssueLabelsFragment = graphql`
  fragment fragmentIssueLabels_IssueFragment on issues {
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
