use anchor_lang::prelude::*;
use demo3::program::Demo3;
use demo3::cpi::accounts::PerformAction as Demo3PerformAction;

declare_id!("AN5RLVdXviuRtCs8jhMcWq4HgzkB3hTNjaWq1U6c8qCS");

#[program]
pub mod demo2 {
    use super::*;

    pub fn perform_action(ctx: Context<PerformAction>, action_data: u64) -> Result<()> {
        msg!("Demo 2: Performing action with data: {}", action_data);

        // Call demo3.perform_action
        let demo3_program = ctx.accounts.demo3_program.to_account_info();
        let demo3_accounts = Demo3PerformAction {
            demo3_program: demo3_program.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(demo3_program, demo3_accounts);
        demo3::cpi::perform_action(cpi_ctx, action_data)?;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct PerformAction<'info> {
    pub demo3_program: Program<'info, Demo3>,
}

#[event]
pub struct ActionPerformedEvent {
    pub action_data: u64,
    pub timestamp: i64,
}
