/**
 * @generated SignedSource<<46f25f8f87c8fef135eccfad0656e3a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type MainScreenQuery$variables = Record<PropertyKey, never>;
export type MainScreenQuery$data = {
  readonly pokemons: {
    readonly results: ReadonlyArray<{
      readonly artwork: string | null | undefined;
      readonly name: string | null | undefined;
    } | null | undefined> | null | undefined;
  } | null | undefined;
};
export type MainScreenQuery = {
  response: MainScreenQuery$data;
  variables: MainScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "limit",
        "value": 20
      }
    ],
    "concreteType": "PokemonList",
    "kind": "LinkedField",
    "name": "pokemons",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "PokemonItem",
        "kind": "LinkedField",
        "name": "results",
        "plural": true,
        "selections": [
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
            "name": "artwork",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "pokemons(limit:20)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainScreenQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "5aedd9996b47ea2979a35eee1fce60d9",
    "id": null,
    "metadata": {},
    "name": "MainScreenQuery",
    "operationKind": "query",
    "text": "query MainScreenQuery {\n  pokemons(limit: 20) {\n    results {\n      name\n      artwork\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ecc21a3c22629666da91dc846c4f60e0";

export default node;
