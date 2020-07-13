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
v1 = [
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
        "name": "url",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateLinkMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateLinkMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateLinkMutation",
    "operationKind": "mutation",
    "text": "mutation CreateLinkMutation(\n  $link: LinkInput!\n) {\n  post(linkInput: $link) {\n    id\n    url\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4142f1d8a241f2c840fcd1607131f0dd';

module.exports = node;
