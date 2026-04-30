/**
 * @generated SignedSource<<1ecc2ac4815600993cc0a694ad78525d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationIssueDetailHeaderTitleMutation$variables = {
  id: any;
  title: string;
};
export type mutationIssueDetailHeaderTitleMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly title: string;
    }>;
  };
};
export type mutationIssueDetailHeaderTitleMutation = {
  response: mutationIssueDetailHeaderTitleMutation$data;
  variables: mutationIssueDetailHeaderTitleMutation$variables;
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
    "name": "title"
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
            "name": "title",
            "variableName": "title"
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
            "name": "title",
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
    "name": "mutationIssueDetailHeaderTitleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutationIssueDetailHeaderTitleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ca349618dbc737a1025ec4f5a28e8f66",
    "id": null,
    "metadata": {},
    "name": "mutationIssueDetailHeaderTitleMutation",
    "operationKind": "mutation",
    "text": "mutation mutationIssueDetailHeaderTitleMutation(\n  $id: UUID!\n  $title: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {title: $title}) {\n    records {\n      nodeId\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fc51d0980e89df09351f665be689fc13";

export default node;
