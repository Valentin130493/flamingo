/**
 * @generated SignedSource<<3b4449c8809b9c4e8fe5119893fddcbb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailHeaderUpdatePriorityMutation$variables = {
  id: any;
  priority: string;
};
export type IssueDetailHeaderUpdatePriorityMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly priority: string;
    }>;
  };
};
export type IssueDetailHeaderUpdatePriorityMutation = {
  response: IssueDetailHeaderUpdatePriorityMutation$data;
  variables: IssueDetailHeaderUpdatePriorityMutation$variables;
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
    "name": "priority"
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
            "name": "priority",
            "variableName": "priority"
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
            "name": "priority",
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
    "name": "IssueDetailHeaderUpdatePriorityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailHeaderUpdatePriorityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f04c603297e97e8328a0cdeae93082a6",
    "id": null,
    "metadata": {},
    "name": "IssueDetailHeaderUpdatePriorityMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailHeaderUpdatePriorityMutation(\n  $id: UUID!\n  $priority: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {priority: $priority}) {\n    records {\n      nodeId\n      id\n      priority\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "90740db1e5c24c893f57f951905dd7b5";

export default node;
