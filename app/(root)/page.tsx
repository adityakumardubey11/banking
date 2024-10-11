import React from 'react'

import HeaderBox from '@/components/HeaderBox'
import TotalBalancebox from '@/components/TotalBalancebox'
import RightSidebar from '@/components/RightSidebar'
const Home = () => {
  const loggedIn = { firstName: 'Aditya', lastName: 'Dubey', 
    email: 'adityakrdubey456@gmail.com'};
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
         <HeaderBox 
           type="greeting"
           title="Welcome"
           user={loggedIn?.firstName || 'Guest'}
           subtext="Access and manage your account and transaction efficiently"
         />

         <TotalBalancebox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1258.35}
         />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance: 123.50 }, { currentBalance: 134.67}]}
      />

    </section>
  )
}

export default Home