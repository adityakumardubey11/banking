
import React from 'react'

import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalancebox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-cols gap-6'>
            <h2 className='header-2'>
            Banks Accounts: {totalBanks}
            </h2>
            <div className='flex flex-col gap-2'>
               <p className='total-balance-label'>
                Total Current Balance
               </p>

               <div className='total-balace-amount flex-center gap-2'>
                  <AnimatedCounter amount =
                   {totalCurrentBalance} />
               </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalancebox
