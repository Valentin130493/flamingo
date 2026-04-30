/**
 * @generated SignedSource<<2be1143987d381c9a31e500f48b3ab10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragmentIssueDetailBody_IssueFragment$data = {
  readonly description: string | null | undefined;
  readonly id: any;
  readonly nodeId: string;
  readonly " $fragmentType": "fragmentIssueDetailBody_IssueFragment";
};
export type fragmentIssueDetailBody_IssueFragment$key = {
  readonly " $data"?: fragmentIssueDetailBody_IssueFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"fragmentIssueDetailBody_IssueFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "fragmentIssueDetailBody_IssueFragment",
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

(node as any).hash = "0809f812cdb9b25dec7b7e4f7c951816";

export default node;
