/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LinkList_feed$ref = any;
export type LinkListPageQueryVariables = {||};
export type LinkListPageQueryResponse = {|
  +feed: {|
    +$fragmentRefs: LinkList_feed$ref
  |}
|};
export type LinkListPageQuery = {|
  variables: LinkListPageQueryVariables,
  response: LinkListPageQueryResponse,
|};
*/


/*
query LinkListPageQuery {
  feed(last: 100, orderBy: {createdAt: desc}) {
    ...LinkList_feed
  }
}

fragment LinkList_feed on Feed {
  links {
    ...Link_link
    id
  }
}

fragment Link_link on Link {
  id
  description
  url
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "last",
    "value": 100
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": {
      "createdAt": "desc"
    }
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Feed",
        "kind": "LinkedField",
        "name": "feed",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "LinkList_feed"
          }
        ],
        "storageKey": "feed(last:100,orderBy:{\"createdAt\":\"desc\"})"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LinkListPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Feed",
        "kind": "LinkedField",
        "name": "feed",
        "plural": false,
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
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "url",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "feed(last:100,orderBy:{\"createdAt\":\"desc\"})"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "LinkListPageQuery",
    "operationKind": "query",
    "text": "query LinkListPageQuery {\n  feed(last: 100, orderBy: {createdAt: desc}) {\n    ...LinkList_feed\n  }\n}\n\nfragment LinkList_feed on Feed {\n  links {\n    ...Link_link\n    id\n  }\n}\n\nfragment Link_link on Link {\n  id\n  description\n  url\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '204d21b27b75cf4cf1afc8fdc49ac1e6';

module.exports = node;
