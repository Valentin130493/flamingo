/**
 * @generated SignedSource<<a0f108f6fab8028ba259c9c679863d85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type IssueDetailHeader_issue$data = {
  readonly created_at: any;
  readonly id: any;
  readonly nodeId: string;
  readonly priority: string;
  readonly status: string;
  readonly title: string;
  readonly " $fragmentType": "IssueDetailHeader_issue";
};
export type IssueDetailHeader_issue$key = {
  readonly " $data"?: IssueDetailHeader_issue$data;
  readonly " $fragmentSpreads": FragmentRefs<"IssueDetailHeader_issue">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "IssueDetailHeader_issue",
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

(node as any).hash = "53eac453c4eacefbefd798cb8bad31c4";

export default node;
