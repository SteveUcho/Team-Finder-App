/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Link_link$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_feed$ref: FragmentReference;
declare export opaque type LinkList_feed$fragmentType: LinkList_feed$ref;
export type LinkList_feed = {|
  +links: $ReadOnlyArray<{|
    +$fragmentRefs: Link_link$ref
  |}>,
  +$refType: LinkList_feed$ref,
|};
export type LinkList_feed$data = LinkList_feed;
export type LinkList_feed$key = {
  +$data?: LinkList_feed$data,
  +$fragmentRefs: LinkList_feed$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LinkList_feed",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Link",
      "kind": "LinkedField",
      "name": "links",
      "plural": true,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Link_link"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Feed"
};
// prettier-ignore
(node/*: any*/).hash = 'f88bb76c0d6f94b51afd163baa996dfd';

module.exports = node;
