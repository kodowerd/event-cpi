import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Demo } from "../target/types/demo";

describe("demo", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Demo as Program<Demo>;

  it("Is initialized!", async () => {
    // Add your test here.
    while (true) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const tx = await program.methods
        .performAction(new anchor.BN(100))
        .accounts({
          program: program.programId,
        })
        .rpc({ commitment: "confirmed" });
      console.log("Your transaction signature", tx);
      const txResult = await program.provider.connection.getTransaction(tx, {
        commitment: "confirmed",
      });

      const ixData = anchor.utils.bytes.bs58.decode(
        txResult.meta.innerInstructions[0].instructions[0].data
      );
      const eventData = anchor.utils.bytes.base64.encode(ixData.slice(8));
      const event = program.coder.events.decode(eventData);
      console.log(event);
    }
  });
});
