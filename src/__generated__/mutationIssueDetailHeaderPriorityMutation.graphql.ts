/**
 * @generated SignedSource<<43bcf40996a1d812b05733d43c81677c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type mutationIssueDetailHeaderPriorityMutation$variables = {
  id: any;
  priority: string;
};
export type mutationIssueDetailHeaderPriorityMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly priority: string;
    }>;
  };
};
export type mutationIssueDetailHeaderPriorityMutation = {
  response: mutationIssueDetailHeaderPriorityMutation$data;
  variables: mutationIssueDetailHeaderPriorityMutation$variables;
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
    "name": "mutationIssueDetailHeaderPriorityMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "mutationIssueDetailHeaderPriorityMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f4c76c5be7c9cf5208a346702cb95be7",
    "id": null,
    "metadata": {},
    "name": "mutationIssueDetailHeaderPriorityMutation",
    "operationKind": "mutation",
    "text": "mutation mutationIssueDetailHeaderPriorityMutation(\n  $id: UUID!\n  $priority: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {priority: $priority}) {\n    records {\n      nodeId\n      id\n      priority\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2ca43a47b7fba095f53c0c540ba31d4c";

export default node;
