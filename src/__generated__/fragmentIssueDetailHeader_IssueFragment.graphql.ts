/**
 * @generated SignedSource<<a6954f799adcad86e9ed75dd6df7ff66>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragmentIssueDetailHeader_IssueFragment$data = {
  readonly created_at: any;
  readonly id: any;
  readonly nodeId: string;
  readonly priority: string;
  readonly status: string;
  readonly title: string;
  readonly " $fragmentType": "fragmentIssueDetailHeader_IssueFragment";
};
export type fragmentIssueDetailHeader_IssueFragment$key = {
  readonly " $data"?: fragmentIssueDetailHeader_IssueFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"fragmentIssueDetailHeader_IssueFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "fragmentIssueDetailHeader_IssueFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "status",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "priority",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    }
  ],
  "type": "issues",
  "abstractKey": null
};

(node as any).hash = "58561e195f381194356710254d864d10";

export default node;
