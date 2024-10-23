use anchor_lang::prelude::*;
use demo2::program::Demo2;
use demo2::cpi::accounts::PerformAction as Demo2PerformAction;
use demo3::program::Demo3;
use demo3::cpi::accounts::PerformAction as Demo3PerformAction;

declare_id!("FncXY9fhaEx2Tb2rcqetJc2yFNDKDqU2QL7pDKzc7sJX");

#[program]
pub mod demo {
    use super::*;

    pub fn perform_action(ctx: Context<PerformAction>, action_data: u64) -> Result<()> {
        // Perform some action
        msg!("Demo 1: Performing action with data: {}", action_data);

        // Call demo2.perform_action
        let demo2_program = ctx.accounts.demo2_program.to_account_info();
        let demo2_accounts = Demo2PerformAction {
            demo3_program: ctx.accounts.demo3_program.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(demo2_program, demo2_accounts);
        demo2::cpi::perform_action(cpi_ctx, action_data)?;

        let demo3_program = ctx.accounts.demo3_program.to_account_info();
        let demo3_accounts = Demo3PerformAction {
            demo3_program: demo3_program.to_account_info(),
        };
        let cpi_ctx = CpiContext::new(demo3_program, demo3_accounts);
        demo3::cpi::perform_action(cpi_ctx, action_data)?;

        // // Emit the ActionPerformedEvent
        // emit_cpi!(ActionPerformedEvent {
        //     action_data,
        //     timestamp: Clock::get()?.unix_timestamp,
        // });

        Ok(())
    }
}

#[event_cpi]
#[derive(Accounts)]
pub struct PerformAction<'info> {
    pub demo2_program: Program<'info, Demo2>,
    pub demo3_program: Program<'info, Demo3>,
}

#[event]
pub struct ActionPerformedEvent {
    pub action_data: u64,
    pub timestamp: i64,
}
