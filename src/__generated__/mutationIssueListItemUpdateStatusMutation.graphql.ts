/**
 * @generated SignedSource<<774708a9a30ce7a215a32c291410021b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationIssueListItemUpdateStatusMutation$variables = {
  id: any;
  status: string;
};
export type mutationIssueListItemUpdateStatusMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly status: string;
    }>;
  };
};
export type mutationIssueListItemUpdateStatusMutation = {
  response: mutationIssueListItemUpdateStatusMutation$data;
  variables: mutationIssueListItemUpdateStatusMutation$variables;
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
    "name": "status"
  }
],
v1 = [
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
            "name": "status",
            "variableName": "status"
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
            "name": "status",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "mutationIssueListItemUpdateStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutationIssueListItemUpdateStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f74408340d7f7b751c09a9991237763",
    "id": null,
    "metadata": {},
    "name": "mutationIssueListItemUpdateStatusMutation",
    "operationKind": "mutation",
    "text": "mutation mutationIssueListItemUpdateStatusMutation(\n  $id: UUID!\n  $status: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {status: $status}) {\n    records {\n      nodeId\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5c16b1b3a724a6535a257329791999da";

export default node;
