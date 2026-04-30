/**
 * @generated SignedSource<<4dd5b198dd3a5299b9e974734490f51b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueDetailBody_issue$data = {
  readonly description: string | null | undefined;
  readonly id: any;
  readonly nodeId: string;
  readonly " $fragmentType": "IssueDetailBody_issue";
};
export type IssueDetailBody_issue$key = {
  readonly " $data"?: IssueDetailBody_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueDetailBody_issue">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueDetailBody_issue",
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
  "type": "issues",
  "abstractKey": null
};

(node as any).hash = "2010495a1086a3cc14d6fd4f102b281b";

export default node;
