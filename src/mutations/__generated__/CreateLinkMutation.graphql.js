/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LinkInput = {|
  description: string,
  url: string,
|};
export type CreateLinkMutationVariables = {|
  link: LinkInput
|};
export type CreateLinkMutationResponse = {|
  +post: {|
    +id: string,
    +url: string,
    +description: string,
    +postedBy: ?{|
      +id: string,
      +name: string,
    |},
  |}
|};
export type CreateLinkMutation = {|
  variables: CreateLinkMutationVariables,
  response: CreateLinkMutationResponse,
|};
*/


/*
mutation CreateLinkMutation(
  $link: LinkInput!
) {
  post(linkInput: $link) {
    id
    url
    description
    postedBy {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "link",
    "type": "LinkInput!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "linkInput",
        "variableName": "link"
      }
    ],
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "post",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "url",
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
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "postedBy",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateLinkMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateLinkMutation",
    "operationKind": "mutation",
    "text": "mutation CreateLinkMutation(\n  $link: LinkInput!\n) {\n  post(linkInput: $link) {\n    id\n    url\n    description\n    postedBy {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6644ba2eaf32ed99b03e55de1c6667d1';

module.exports = node;
