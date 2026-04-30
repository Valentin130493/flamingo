/**
 * @generated SignedSource<<388e79a0cb895e3371cf9ce7a55020ff>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type IssueDetailBodyUpdateMutation$variables = {
  description: string;
  id: any;
};
export type IssueDetailBodyUpdateMutation$data = {
  readonly updateissuesCollection: {
    readonly records: ReadonlyArray<{
      readonly description: string | null | undefined;
      readonly id: any;
      readonly nodeId: string;
    }>;
  };
};
export type IssueDetailBodyUpdateMutation = {
  response: IssueDetailBodyUpdateMutation$data;
  variables: IssueDetailBodyUpdateMutation$variables;
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
    "name": "IssueDetailBodyUpdateMutation",
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
    "name": "IssueDetailBodyUpdateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "c8609179da9888b0d62b0ec979247878",
    "id": null,
    "metadata": {},
    "name": "IssueDetailBodyUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation IssueDetailBodyUpdateMutation(\n  $id: UUID!\n  $description: String!\n) {\n  updateissuesCollection(filter: {id: {eq: $id}}, set: {description: $description}) {\n    records {\n      nodeId\n      id\n      description\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "88c66bb35412dbd38884f5183217ebb7";

export default node;
