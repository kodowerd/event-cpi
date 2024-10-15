import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Demo } from "../target/types/demo";

describe("demo", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Demo as Program<Demo>;

  it("Is initialized!", async () => {
    // Add event listener
    const listener = program.addEventListener(
      "actionPerformedEvent",
      (eventData) => {
        console.log("Event received:", eventData);
      }
    );

    // Keep the test running until the process exits
    await new Promise((resolve) => setTimeout(resolve, 1000 * 60));
  });
});
