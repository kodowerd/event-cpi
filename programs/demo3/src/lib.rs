use anchor_lang::prelude::*;

declare_id!("GtEeAt513NhkteU1z1boBsZXwTeiGXVf3kRiAjk79nt8");

#[program]
pub mod demo3 {
    use super::*;

    pub fn perform_action(_ctx: Context<PerformAction>, action_data: u64) -> Result<()> {
        msg!("Demo 3: Performing action with data: {}", action_data);

        // Emit the ActionPerformedEvent
        // emit_cpi!(ActionPerformedEvent {
        //     action_data,
        //     timestamp: Clock::get()?.unix_timestamp,
        // });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct PerformAction<'info> {
    /// CHECK: need to retain 'info, didn't know of a better way
    pub demo3_program: UncheckedAccount<'info>,
}

#[event]
pub struct ActionPerformedEvent {
    pub action_data: u64,
    pub timestamp: i64,
}
