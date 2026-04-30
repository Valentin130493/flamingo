/**
 * @generated SignedSource<<7c37548fbd4ac4e43b0a54c3c81dbd36>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueDetailLabels_issue$data = {
  readonly id: any;
  readonly issue_labelsCollection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly label_id: any;
        readonly labels: {
          readonly color: string;
          readonly id: any;
          readonly name: string;
          readonly nodeId: string;
        } | null | undefined;
        readonly nodeId: string;
      };
    }>;
  } | null | undefined;
  readonly nodeId: string;
  readonly " $fragmentType": "IssueDetailLabels_issue";
};
export type IssueDetailLabels_issue$key = {
  readonly " $data"?: IssueDetailLabels_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueDetailLabels_issue">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nodeId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueDetailLabels_issue",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 20
        }
      ],
      "concreteType": "issue_labelsConnection",
      "kind": "LinkedField",
      "name": "issue_labelsCollection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "issue_labelsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "issue_labels",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "label_id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "labels",
                  "kind": "LinkedField",
                  "name": "labels",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/),
                    (v1/*: any*/),
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "name",
                      "storageKey": null
                    },
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "color",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "issue_labelsCollection(first:20)"
    }
  ],
  "type": "issues",
  "abstractKey": null
};
})();

(node as any).hash = "372cd73a19a20c3e4f57000b739774e2";

export default node;
