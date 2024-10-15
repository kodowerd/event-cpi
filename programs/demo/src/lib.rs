use anchor_lang::prelude::*;

declare_id!("98cf3XgFWdycZrwuXyZJsWwFip8FyoH3kn6eFLPdcNB2");

#[program]
pub mod demo {
    use super::*;

    pub fn perform_action(ctx: Context<PerformAction>, action_data: u64) -> Result<()> {
        // Perform some action
        msg!("Performing action with data: {}", action_data);

        // Emit the ActionPerformedEvent
        emit_cpi!(ActionPerformedEvent {
            action_data,
            timestamp: Clock::get()?.unix_timestamp,
        });

        Ok(())
    }
}

#[event_cpi]
#[derive(Accounts)]
pub struct PerformAction<'info> {}

#[event]
pub struct ActionPerformedEvent {
    pub action_data: u64,
    pub timestamp: i64,
}
