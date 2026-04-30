/**
 * @generated SignedSource<<66825ae74f1f578fd89fa1c81dd39cd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailHeaderUpdateStatusMutation$variables = {
  id: any;
  status: string;
};
export type IssueDetailHeaderUpdateStatusMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly status: string;
    }>;
  };
};
export type IssueDetailHeaderUpdateStatusMutation = {
  response: IssueDetailHeaderUpdateStatusMutation$data;
  variables: IssueDetailHeaderUpdateStatusMutation$variables;
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
    "name": "IssueDetailHeaderUpdateStatusMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailHeaderUpdateStatusMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "e8849501837ce4462b390736e6fc7a12",
    "id": null,
    "metadata": {},
    "name": "IssueDetailHeaderUpdateStatusMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailHeaderUpdateStatusMutation(\n  $id: UUID!\n  $status: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {status: $status}) {\n    records {\n      nodeId\n      id\n      status\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3e3a57f4855a4e728a050527c7fd0502";

export default node;
