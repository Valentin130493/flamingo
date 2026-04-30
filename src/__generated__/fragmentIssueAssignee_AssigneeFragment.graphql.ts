/**
 * @generated SignedSource<<fa9cc9bc311cf8baed50bf9558c7746c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragmentIssueAssignee_AssigneeFragment$data = {
  readonly avatar_url: string | null | undefined;
  readonly id: any;
  readonly name: string;
  readonly nodeId: string;
  readonly " $fragmentType": "fragmentIssueAssignee_AssigneeFragment";
};
export type fragmentIssueAssignee_AssigneeFragment$key = {
  readonly " $data"?: fragmentIssueAssignee_AssigneeFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"fragmentIssueAssignee_AssigneeFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "fragmentIssueAssignee_AssigneeFragment",
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
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatar_url",
      "storageKey": null
    }
  ],
  "type": "users",
  "abstractKey": null
};

(node as any).hash = "3be9cd642ae359de300231f98789602f";

export default node;
