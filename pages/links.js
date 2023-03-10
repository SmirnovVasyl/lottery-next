import Head from 'next/head'

export default function Links()
{
  return (
    <>
      <Head>
        <title>links page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-black'>
        <div className='h-screen w-full flex flex-col justify-center items-center gap-10'>
          <a href='/' target='_blank' className='underline text-blue-600'>Home</a>
          <a href='/aboutUs' target='_blank' className='underline text-blue-600'>About Us</a>
          <a href='/faq' target='_blank' className='underline text-blue-600'>FAQ</a>
          <a href='/roadMap' target='_blank' className='underline text-blue-600'>Roadmap</a>
          <a href='/lottery' target='_blank' className='underline text-blue-600'>Lottery game mode</a>
          <a href='/statistic' target='_blank' className='underline text-blue-600'>Statistic of Lottery 1</a>
          <a href='/statisticLottery' target='_blank' className='underline text-blue-600'>Statistic of Lottery 2</a>
          <a href='/dashboard' target='_blank' className='underline text-blue-600'>Dashboard</a>
          <a href='/dashboardMain' target='_blank' className='underline text-blue-600'>Dashboard Main</a>
          <a href='/claimForm' target='_blank' className='underline text-blue-600'>ClaimForm</a>
          <a href='/claimReward' target='_blank' className='underline text-blue-600'>Claim reward Digital</a>
          <a href='/claimRewardPhysical' target='_blank' className='underline text-blue-600'>Claim reward Physical</a>
          <a href='/mintLottery1' target='_blank' className='underline text-blue-600'>Mint Lottery Public Phase</a>
          <a href='/mintFinished' target='_blank' className='underline text-blue-600'>Mint Finished</a>

          <div className='mt-30' />

          <a href='/connectWallet' target='_blank' className='underline text-blue-600'>Connect Wallet</a>
          <a href='/dashboardMain1' target='_blank' className='underline text-blue-600'>Dashboard Main1</a>
          <a href='/claim' target='_blank' className='underline text-blue-600'>Claim</a>
          <a href='/mintLottery2' target='_blank' className='underline text-blue-600'>Mint Lottery 2</a>
          <a href='/mintLottery3' target='_blank' className='underline text-blue-600'>Mint Lottery 3</a>
        </div>
      </main>
    </>
  )
}