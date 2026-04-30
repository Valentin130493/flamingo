/**
 * @generated SignedSource<<811f0adcf54656097805f5bac59d9311>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailLabelsRemoveMutation$variables = {
  issue_id: any;
  label_id: any;
};
export type IssueDetailLabelsRemoveMutation$data = {
  readonly deleteFromissue_labelsCollection: {
    readonly records: ReadonlyArray<{
      readonly issue_id: any;
      readonly label_id: any;
      readonly nodeId: string;
    }>;
  };
};
export type IssueDetailLabelsRemoveMutation = {
  response: IssueDetailLabelsRemoveMutation$data;
  variables: IssueDetailLabelsRemoveMutation$variables;
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
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "eq",
                "variableName": "issue_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "issue_id"
          },
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "eq",
                "variableName": "label_id"
              }
            ],
            "kind": "ObjectValue",
            "name": "label_id"
          }
        ],
        "kind": "ObjectValue",
        "name": "filter"
      }
    ],
    "concreteType": "issue_labelsDeleteResponse",
    "kind": "LinkedField",
    "name": "deleteFromissue_labelsCollection",
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
    "name": "IssueDetailLabelsRemoveMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailLabelsRemoveMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9eb501bd5b1cdbef1a2685a91b7efd7e",
    "id": null,
    "metadata": {},
    "name": "IssueDetailLabelsRemoveMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailLabelsRemoveMutation(\n  $issue_id: UUID!\n  $label_id: UUID!\n) {\n  deleteFromissue_labelsCollection(filter: {issue_id: {eq: $issue_id}, label_id: {eq: $label_id}}) {\n    records {\n      nodeId\n      issue_id\n      label_id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8e96c155a217cfb341ffec62f08b4160";

export default node;
