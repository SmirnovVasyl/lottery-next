import Image from 'next/image'
import { useState, useEffect } from 'react';

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

export const Lottery_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100">
          <h1 className="max-w-[90%] md:max-w-550 text-30 font-[700] leading-[35px] text-center md:text-45 md:leading-[50px]">
            MYLT Lottery Mode Game
          </h1>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
          <div className='flex flex-col'>
            <span className='text-[35px] leading-[30px] font-[600] md:text-[45px]'>First Phase</span>
            <span className='text-[20px] leading-[60px] font-[600] md:text-[25px]'>(Mylting Your NFT Tickets)</span>
          </div>
          <div className='text-[18px] leading-[25px] font-[300] Poppins'>
            Your lottery journey will begin when you mint your first few tickets. The process is just like in a traditional lottery and will go underway in three different ticket offerings.
          </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <Image
            unoptimized={true}
            src={myltPurple}
            alt="logo-img"
            className='w-[80%] max-w-[300px]'
          />
        </div>
      </div>

      <div className='container_ py-50 px-20'>
        <div className='w-full grid grid-cols-1 gap-50 md:grid-cols-2 xl:grid-cols-3'>
          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-350 px-40 py-50'>
              <div className='text-[28px] font-[600] leading-9'>
                VIP Whitelist Offering
              </div>

              <div className='text-[18px] font-[300] leading-8 pt-15'>
                Users with access to our VIP whitelist offering can enter the minting page 15 minutes before everyone else. With the minting of one ticket, each player gets one more for free. The sale is limited to only one offer per player.
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-350 px-40 py-50'>
              <div className='text-[28px] font-[600] leading-9'>
                VIP Whitelist Offering
              </div>

              <div className='text-[18px] font-[300] leading-8 pt-15'>
                Users with access to our VIP whitelist offering can enter the minting page 15 minutes before everyone else. With the minting of one ticket, each player gets one more for free. The sale is limited to only one offer per player.
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-350 px-40 py-50'>
              <div className='text-[28px] font-[600] leading-9'>
                VIP Whitelist Offering
              </div>

              <div className='text-[18px] font-[300] leading-8 pt-15'>
                Users with access to our VIP whitelist offering can enter the minting page 15 minutes before everyone else. With the minting of one ticket, each player gets one more for free. The sale is limited to only one offer per player.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <Image
            unoptimized={true}
            src={myltGold}
            alt="logo-img"
            className='w-[80%] max-w-[300px]'
          />
        </div>

        <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
          <div className='flex flex-col'>
            <span className='text-[35px] leading-[30px] font-[600] md:text-[45px]'>Second Phase</span>
            <span className='text-[20px] leading-[60px] font-[600] md:text-[25px]'>(Mylting Your NFT Tickets)</span>
          </div>
          <div className='text-[18px] leading-[25px] font-[300] Poppins'>
            The second phase marks the beginning of the MYLT lottery with a limited supply of 2,000 NFTs. The pre-reveal phase will show if you win any top prizes or MYLT tokens you can use to buy additional tickets. That's where you can immediately put your ticket up for auction, directly making a profit.
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
          <div className='flex flex-col'>
            <span className='text-[35px] leading-[30px] font-[600] md:text-[45px]'>Third Phase</span>
            <span className='text-[20px] leading-[60px] font-[600] md:text-[25px]'>(Reveal & Auction)</span>
          </div>
          <div className='text-[18px] leading-[25px] font-[300] Poppins'>
            The reveal phase is where you will know precisely what you win. And here comes a crucial decision. Do you want to keep your item or auction it to the highest bidder to make a profit? Whether buying or selling, you have between 7 and 14 days to complete your auctions.
          </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <Image
            unoptimized={true}
            src={myltRed}
            alt="logo-img"
            className='w-[80%] max-w-[300px]'
          />
        </div>
      </div>
    </>
  )
} 