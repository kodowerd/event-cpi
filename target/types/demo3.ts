/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/demo3.json`.
 */
export type Demo3 = {
  "address": "GtEeAt513NhkteU1z1boBsZXwTeiGXVf3kRiAjk79nt8",
  "metadata": {
    "name": "demo3",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "performAction",
      "discriminator": [
        151,
        230,
        84,
        7,
        96,
        176,
        215,
        160
      ],
      "accounts": [
        {
          "name": "demo3Program"
        }
      ],
      "args": [
        {
          "name": "actionData",
          "type": "u64"
        }
      ]
    }
  ],
  "events": [
    {
      "name": "actionPerformedEvent",
      "discriminator": [
        207,
        17,
        23,
        27,
        161,
        112,
        204,
        103
      ]
    }
  ],
  "types": [
    {
      "name": "actionPerformedEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "actionData",
            "type": "u64"
          },
          {
            "name": "timestamp",
            "type": "i64"
          }
        ]
      }
    }
  ]
};
