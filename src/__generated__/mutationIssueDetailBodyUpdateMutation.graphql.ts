/**
 * @generated SignedSource<<19569ca217980262e0662a93938ea827>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationIssueDetailBodyUpdateMutation$variables = {
  description: string;
  id: any;
};
export type mutationIssueDetailBodyUpdateMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly id: any;
      readonly nodeId: string;
    }>;
  };
};
export type mutationIssueDetailBodyUpdateMutation = {
  response: mutationIssueDetailBodyUpdateMutation$data;
  variables: mutationIssueDetailBodyUpdateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
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
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "description",
            "variableName": "description"
          }
        ],
        "kind": "ObjectValue",
        "name": "set"
      }
    ],
    "concreteType": "issuesUpdateResponse",
    "kind": "LinkedField",
    "name": "updateissuesCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "issues",
        "kind": "LinkedField",
        "name": "records",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "nodeId",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "description",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "mutationIssueDetailBodyUpdateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "mutationIssueDetailBodyUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "df0ae243263ae8968b5df0acbd01ba19",
    "id": null,
    "metadata": {},
    "name": "mutationIssueDetailBodyUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation mutationIssueDetailBodyUpdateMutation(\n  $id: UUID!\n  $description: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {description: $description}) {\n    records {\n      nodeId\n      id\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9a785980c9cec84a2f6640b230e1cf9a";

export default node;
