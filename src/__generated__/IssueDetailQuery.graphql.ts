/**
 * @generated SignedSource<<d7ed770fa3fde71c6d90abc050909929>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueDetailQuery$variables = {
  id: any;
  issueId: any;
};
export type IssueDetailQuery$data = {
  readonly issuesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: any;
        readonly nodeId: string;
        readonly users: {
          readonly " $fragmentSpreads": FragmentRefs<"IssueAssignee_user">;
        } | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"IssueDetailBody_issue" | "IssueDetailHeader_issue" | "IssueDetailLabels_issue">;
      };
    }>;
  } | null | undefined;
  readonly labelsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly color: string;
        readonly id: any;
        readonly name: string;
        readonly nodeId: string;
      };
    }>;
  } | null | undefined;
  readonly " $fragmentSpreads": FragmentRefs<"CommentThread_query">;
};
export type IssueDetailQuery = {
  response: IssueDetailQuery$data;
  variables: IssueDetailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "issueId"
  }
],
v1 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "eq",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "id"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "color",
    "storageKey": null
  }
],
v6 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": [
        {
          "name": "AscNullsLast"
        }
      ]
    }
  ],
  "concreteType": "labelsConnection",
  "kind": "LinkedField",
  "name": "labelsCollection",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "labelsEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "labels",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": (v5/*: any*/),
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": "labelsCollection(orderBy:[{\"name\":\"AscNullsLast\"}])"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v8 = {
  "kind": "Literal",
  "name": "first",
  "value": 20
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "users",
  "kind": "LinkedField",
  "name": "users",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar_url",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v10 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "eq",
            "variableName": "issueId"
          }
        ],
        "kind": "ObjectValue",
        "name": "issue_id"
      }
    ],
    "kind": "ObjectValue",
    "name": "filter"
  },
  (v8/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      {
        "created_at": "AscNullsFirst"
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "IssueDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "issuesConnection",
        "kind": "LinkedField",
        "name": "issuesCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "issuesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "issues",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "IssueDetailHeader_issue"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "IssueDetailBody_issue"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "IssueDetailLabels_issue"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "users",
                    "kind": "LinkedField",
                    "name": "users",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "IssueAssignee_user"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": [
          {
            "kind": "Variable",
            "name": "issueId",
            "variableName": "issueId"
          }
        ],
        "kind": "FragmentSpread",
        "name": "CommentThread_query"
      },
      (v6/*: any*/)
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "issuesConnection",
        "kind": "LinkedField",
        "name": "issuesCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "issuesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "issues",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "status",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "priority",
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "description",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": [
                      (v8/*: any*/)
                    ],
                    "concreteType": "issue_labelsConnection",
                    "kind": "LinkedField",
                    "name": "issue_labelsCollection",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "issue_labelsEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "issue_labels",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "label_id",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "labels",
                                "kind": "LinkedField",
                                "name": "labels",
                                "plural": false,
                                "selections": (v5/*: any*/),
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "issue_labelsCollection(first:20)"
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
        "concreteType": "commentsConnection",
        "kind": "LinkedField",
        "name": "commentsCollection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "commentsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "comments",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "body",
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
        "filters": [
          "filter",
          "orderBy"
        ],
        "handle": "connection",
        "key": "CommentThread_commentsCollection",
        "kind": "LinkedHandle",
        "name": "commentsCollection"
      },
      (v6/*: any*/)
    ]
  },
  "params": {
    "cacheID": "7bce63f942ee64965f623a6507e54c6a",
    "id": null,
    "metadata": {},
    "name": "IssueDetailQuery",
    "operationKind": "query",
    "text": "query IssueDetailQuery(\n  $id: UUID!\n  $issueId: UUID!\n) {\n  issuesCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        nodeId\n        id\n        ...IssueDetailHeader_issue\n        ...IssueDetailBody_issue\n        ...IssueDetailLabels_issue\n        users {\n          ...IssueAssignee_user\n        }\n      }\n    }\n  }\n  ...CommentThread_query_4n6v5i\n  labelsCollection(orderBy: [{name: AscNullsLast}]) {\n    edges {\n      node {\n        nodeId\n        id\n        name\n        color\n      }\n    }\n  }\n}\n\nfragment CommentItem_comment on comments {\n  nodeId\n  id\n  body\n  created_at\n  users {\n    nodeId\n    id\n    name\n    avatar_url\n  }\n}\n\nfragment CommentThread_query_4n6v5i on Query {\n  commentsCollection(filter: {issue_id: {eq: $issueId}}, first: 20, orderBy: [{created_at: AscNullsFirst}]) {\n    edges {\n      node {\n        nodeId\n        ...CommentItem_comment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment IssueAssignee_user on users {\n  nodeId\n  id\n  name\n  avatar_url\n}\n\nfragment IssueDetailBody_issue on issues {\n  nodeId\n  id\n  description\n}\n\nfragment IssueDetailHeader_issue on issues {\n  nodeId\n  id\n  title\n  status\n  priority\n  created_at\n}\n\nfragment IssueDetailLabels_issue on issues {\n  nodeId\n  id\n  issue_labelsCollection(first: 20) {\n    edges {\n      node {\n        nodeId\n        label_id\n        labels {\n          nodeId\n          id\n          name\n          color\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "cdf659594473d9696dcdb5df6f0dbaa7";

export default node;
