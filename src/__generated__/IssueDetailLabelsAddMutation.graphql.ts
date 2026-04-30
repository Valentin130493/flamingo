/**
 * @generated SignedSource<<df915c1ee82cde0426f0e5ba414d8e78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailLabelsAddMutation$variables = {
  issue_id: any;
  label_id: any;
};
export type IssueDetailLabelsAddMutation$data = {
  readonly insertIntoissue_labelsCollection: {
    readonly records: ReadonlyArray<{
      readonly issue_id: any;
      readonly label_id: any;
      readonly nodeId: string;
    }>;
  } | null | undefined;
};
export type IssueDetailLabelsAddMutation = {
  response: IssueDetailLabelsAddMutation$data;
  variables: IssueDetailLabelsAddMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "issue_id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "label_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "items": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "issue_id",
                "variableName": "issue_id"
              },
              {
                "kind": "Variable",
                "name": "label_id",
                "variableName": "label_id"
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
    "concreteType": "issue_labelsInsertResponse",
    "kind": "LinkedField",
    "name": "insertIntoissue_labelsCollection",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "issue_labels",
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
            "name": "issue_id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "label_id",
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
    "name": "IssueDetailLabelsAddMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailLabelsAddMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b246fe47e887f1ab9e4173be1d31559f",
    "id": null,
    "metadata": {},
    "name": "IssueDetailLabelsAddMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailLabelsAddMutation(\n  $issue_id: UUID!\n  $label_id: UUID!\n) {\n  insertIntoissue_labelsCollection(objects: [{issue_id: $issue_id, label_id: $label_id}]) {\n    records {\n      nodeId\n      issue_id\n      label_id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d0f1da1732677da1161f64b9c78bdccc";

export default node;
