/**
 * @generated SignedSource<<217d41bf90539ae8d64bb1dfd00d7db5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailHeaderUpdateTitleMutation$variables = {
  id: any;
  title: string;
};
export type IssueDetailHeaderUpdateTitleMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly id: any;
      readonly nodeId: string;
      readonly title: string;
    }>;
  };
};
export type IssueDetailHeaderUpdateTitleMutation = {
  response: IssueDetailHeaderUpdateTitleMutation$data;
  variables: IssueDetailHeaderUpdateTitleMutation$variables;
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
    "name": "IssueDetailHeaderUpdateTitleMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "IssueDetailHeaderUpdateTitleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f85e218d02e97be8a794d3cb12fccc27",
    "id": null,
    "metadata": {},
    "name": "IssueDetailHeaderUpdateTitleMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailHeaderUpdateTitleMutation(\n  $id: UUID!\n  $title: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {title: $title}) {\n    records {\n      nodeId\n      id\n      title\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d3655e91e8fc0da66018153661752c2";

export default node;
