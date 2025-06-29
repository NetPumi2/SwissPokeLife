/**
 * @generated SignedSource<<209630f6b27bf6707eef64357c573ea2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type DetailScreenQuery$variables = {
  name: string;
};
export type DetailScreenQuery$data = {
  readonly pokemon: {
    readonly height: number | null | undefined;
    readonly is_default: boolean | null | undefined;
    readonly name: string | null | undefined;
    readonly weight: number | null | undefined;
  } | null | undefined;
};
export type DetailScreenQuery = {
  response: DetailScreenQuery$data;
  variables: DetailScreenQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "name"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name"
      }
    ],
    "concreteType": "Pokemon",
    "kind": "LinkedField",
    "name": "pokemon",
    "plural": false,
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
        "name": "height",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "is_default",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "weight",
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
    "name": "DetailScreenQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DetailScreenQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0bafe1cb4b1fcc654dbaf0e5e5cbed05",
    "id": null,
    "metadata": {},
    "name": "DetailScreenQuery",
    "operationKind": "query",
    "text": "query DetailScreenQuery(\n  $name: String!\n) {\n  pokemon(name: $name) {\n    name\n    height\n    is_default\n    weight\n  }\n}\n"
  }
};
})();

(node as any).hash = "45efa2ed9e4088d74f7f5a8e89a13bb6";

export default node;
