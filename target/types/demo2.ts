/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/demo2.json`.
 */
export type Demo2 = {
  "address": "AN5RLVdXviuRtCs8jhMcWq4HgzkB3hTNjaWq1U6c8qCS",
  "metadata": {
    "name": "demo2",
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
          "name": "demo3Program",
          "address": "GtEeAt513NhkteU1z1boBsZXwTeiGXVf3kRiAjk79nt8"
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
