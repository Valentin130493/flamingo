/**
 * @generated SignedSource<<3d6dc6f1e773228cfec7e13786c3151a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type queryIssueDetailQuery$variables = {
  id: any;
  issueId: any;
};
export type queryIssueDetailQuery$data = {
  readonly issuesCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: any;
        readonly nodeId: string;
        readonly users: {
          readonly " $fragmentSpreads": FragmentRefs<"fragmentIssueAssignee_AssigneeFragment">;
        } | null | undefined;
        readonly " $fragmentSpreads": FragmentRefs<"fragmentIssueDetailBody_IssueFragment" | "fragmentIssueDetailHeader_IssueFragment" | "fragmentIssueLabels_IssueFragment">;
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
  readonly " $fragmentSpreads": FragmentRefs<"fragmentCommentThreadFragment">;
};
export type queryIssueDetailQuery = {
  response: queryIssueDetailQuery$data;
  variables: queryIssueDetailQuery$variables;
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
    "name": "queryIssueDetailQuery",
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
                    "name": "fragmentIssueDetailHeader_IssueFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "fragmentIssueDetailBody_IssueFragment"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "fragmentIssueLabels_IssueFragment"
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
                        "name": "fragmentIssueAssignee_AssigneeFragment"
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
        "name": "fragmentCommentThreadFragment"
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
    "name": "queryIssueDetailQuery",
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
    "cacheID": "4d4657dfbb5698053095afc3abc537a0",
    "id": null,
    "metadata": {},
    "name": "queryIssueDetailQuery",
    "operationKind": "query",
    "text": "query queryIssueDetailQuery(\n  $id: UUID!\n  $issueId: UUID!\n) {\n  issuesCollection(filter: {id: {eq: $id}}) {\n    edges {\n      node {\n        nodeId\n        id\n        ...fragmentIssueDetailHeader_IssueFragment\n        ...fragmentIssueDetailBody_IssueFragment\n        ...fragmentIssueLabels_IssueFragment\n        users {\n          ...fragmentIssueAssignee_AssigneeFragment\n        }\n      }\n    }\n  }\n  ...fragmentCommentThreadFragment_4n6v5i\n  labelsCollection(orderBy: [{name: AscNullsLast}]) {\n    edges {\n      node {\n        nodeId\n        id\n        name\n        color\n      }\n    }\n  }\n}\n\nfragment fragmentCommentItem_CommentFragment on comments {\n  nodeId\n  id\n  body\n  created_at\n  users {\n    nodeId\n    id\n    name\n    avatar_url\n  }\n}\n\nfragment fragmentCommentThreadFragment_4n6v5i on Query {\n  commentsCollection(filter: {issue_id: {eq: $issueId}}, first: 20, orderBy: [{created_at: AscNullsFirst}]) {\n    edges {\n      node {\n        nodeId\n        ...fragmentCommentItem_CommentFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment fragmentIssueAssignee_AssigneeFragment on users {\n  nodeId\n  id\n  name\n  avatar_url\n}\n\nfragment fragmentIssueDetailBody_IssueFragment on issues {\n  nodeId\n  id\n  description\n}\n\nfragment fragmentIssueDetailHeader_IssueFragment on issues {\n  nodeId\n  id\n  title\n  status\n  priority\n  created_at\n}\n\nfragment fragmentIssueLabels_IssueFragment on issues {\n  nodeId\n  id\n  issue_labelsCollection(first: 20) {\n    edges {\n      node {\n        nodeId\n        label_id\n        labels {\n          nodeId\n          id\n          name\n          color\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82b984119129405f9e90d156eac8d0d2";

export default node;
