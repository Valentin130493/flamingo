/**
 * @generated SignedSource<<8af8df9e779c5faecd07102f7b65743b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type fragmentCommentItem_CommentFragment$data = {
  readonly body: string;
  readonly created_at: any;
  readonly id: any;
  readonly nodeId: string;
  readonly users: {
    readonly avatar_url: string | null | undefined;
    readonly id: any;
    readonly name: string;
    readonly nodeId: string;
  } | null | undefined;
  readonly " $fragmentType": "fragmentCommentItem_CommentFragment";
};
export type fragmentCommentItem_CommentFragment$key = {
  readonly " $data"?: fragmentCommentItem_CommentFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"fragmentCommentItem_CommentFragment">;
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
  "name": "fragmentCommentItem_CommentFragment",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "body",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "created_at",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "users",
      "kind": "LinkedField",
      "name": "users",
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
          "name": "avatar_url",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "comments",
  "abstractKey": null
};
})();

(node as any).hash = "0d337a443d43f7f281efc145720a34a6";

export default node;
