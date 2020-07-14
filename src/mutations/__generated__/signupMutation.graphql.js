/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signupMutationVariables = {|
  name: string,
  email: string,
  password: string,
|};
export type signupMutationResponse = {|
  +signup: ?{|
    +user: ?{|
      +id: string
    |}
  |},
  +login: ?{|
    +token: ?string,
    +user: ?{|
      +id: string
    |},
  |},
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/


/*
mutation signupMutation(
  $name: String!
  $email: String!
  $password: String!
) {
  signup(email: $email, password: $password, name: $name) {
    user {
      id
    }
  }
  login(email: $email, password: $password) {
    token
    user {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  }
],
v1 = {
  "kind": "Variable",
  "name": "email",
  "variableName": "email"
},
v2 = {
  "kind": "Variable",
  "name": "password",
  "variableName": "password"
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": [
      (v1/*: any*/),
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      },
      (v2/*: any*/)
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "signup",
    "plural": false,
    "selections": [
      (v3/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "concreteType": "AuthPayload",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      (v3/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "signupMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "signupMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "signupMutation",
    "operationKind": "mutation",
    "text": "mutation signupMutation(\n  $name: String!\n  $email: String!\n  $password: String!\n) {\n  signup(email: $email, password: $password, name: $name) {\n    user {\n      id\n    }\n  }\n  login(email: $email, password: $password) {\n    token\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e40dedb3f04e4ccecf41774dd3a96b7a';

module.exports = node;
