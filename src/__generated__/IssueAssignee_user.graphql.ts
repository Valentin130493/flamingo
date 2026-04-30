/**
 * @generated SignedSource<<7de1dffdbddd976f24931b65b2b39a2b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueAssignee_user$data = {
  readonly avatar_url: string | null | undefined;
  readonly id: any;
  readonly name: string;
  readonly nodeId: string;
  readonly " $fragmentType": "IssueAssignee_user";
};
export type IssueAssignee_user$key = {
  readonly " $data"?: IssueAssignee_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueAssignee_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueAssignee_user",
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

(node as any).hash = "f35cec14c657dc9168d9da45c7309559";

export default node;
