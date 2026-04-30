/**
 * @generated SignedSource<<5f978cc5cac45931fa00907210bdf9cd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationAddCommentMutation$variables = {
  author_id: any;
  body: string;
  issue_id: any;
};
export type mutationAddCommentMutation$data = {
  readonly insertIntocommentsCollection: {
    readonly records: ReadonlyArray<{
      readonly author_id: any;
      readonly body: string;
      readonly created_at: any;
      readonly id: any;
      readonly issue_id: any;
      readonly nodeId: string;
      readonly users: {
        readonly avatar_url: string | null | undefined;
        readonly id: any;
        readonly name: string;
        readonly nodeId: string;
      } | null | undefined;
    }>;
  } | null | undefined;
};
export type mutationAddCommentMutation = {
  response: mutationAddCommentMutation$data;
  variables: mutationAddCommentMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "author_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "body"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "issue_id"
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "items": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "author_id",
                "variableName": "author_id"
              },
              {
                "kind": "Variable",
                "name": "body",
                "variableName": "body"
              },
              {
                "kind": "Variable",
                "name": "issue_id",
                "variableName": "issue_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "objects.0"
          }
        ],
        "kind": "ListValue",
        "name": "objects"
      }
    ],
    "concreteType": "commentsInsertResponse",
    "kind": "LinkedField",
    "name": "insertIntocommentsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "comments",
        "kind": "LinkedField",
        "name": "records",
        "plural": true,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "issue_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "body",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "author_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "created_at",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "users",
            "kind": "LinkedField",
            "name": "users",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "avatar_url",
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "mutationAddCommentMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "mutationAddCommentMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "a87fe103533e777da0db2f7a40f9bd0c",
    "id": null,
    "metadata": {},
    "name": "mutationAddCommentMutation",
    "operationKind": "mutation",
    "text": "mutation mutationAddCommentMutation(\n  $issue_id: UUID!\n  $author_id: UUID!\n  $body: String!\n) {\n  insertIntocommentsCollection(objects: [{issue_id: $issue_id, author_id: $author_id, body: $body}]) {\n    records {\n      nodeId\n      id\n      issue_id\n      body\n      author_id\n      created_at\n      users {\n        nodeId\n        id\n        name\n        avatar_url\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "49174e87c797c63ea0698f275124816e";

export default node;
