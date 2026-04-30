/**
 * @generated SignedSource<<9baf5aea2b482d061e87069e0fce6170>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueListItemUpdateStatusMutation$variables = {
  id: any;
  status: string;
};
export type IssueListItemUpdateStatusMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly status: string;
    }>;
  };
};
export type IssueListItemUpdateStatusMutation = {
  response: IssueListItemUpdateStatusMutation$data;
  variables: IssueListItemUpdateStatusMutation$variables;
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
    "name": "IssueListItemUpdateStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueListItemUpdateStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6eafcfe661ea214f64843043679b7ecc",
    "id": null,
    "metadata": {},
    "name": "IssueListItemUpdateStatusMutation",
    "operationKind": "mutation",
    "text": "mutation IssueListItemUpdateStatusMutation(\n  $id: UUID!\n  $status: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {status: $status}) {\n    records {\n      nodeId\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b982d7061d015a8ef65a19980ca4ae1";

export default node;
