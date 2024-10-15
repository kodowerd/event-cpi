/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/demo.json`.
 */
export type Demo = {
  "address": "98cf3XgFWdycZrwuXyZJsWwFip8FyoH3kn6eFLPdcNB2",
  "metadata": {
    "name": "demo",
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
          "name": "eventAuthority",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  95,
                  95,
                  101,
                  118,
                  101,
                  110,
                  116,
                  95,
                  97,
                  117,
                  116,
                  104,
                  111,
                  114,
                  105,
                  116,
                  121
                ]
              }
            ]
          }
        },
        {
          "name": "program"
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
