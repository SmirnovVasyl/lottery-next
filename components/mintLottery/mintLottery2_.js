import Image from 'next/image'

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

export const MintLottery2_ = () =>
{
  return (
    <>
      <div className='container_ grid grid-cols-1 md:grid-cols-3 gap-20 py-100 px-30 '>
        <div className='flex flex-col justify-start items-center'>
          <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-50 justify-center'>
            <div className='text-35 font-[700] leading-8 text-center'>PHASE</div>
            <div className='text-60 font-[700] leading-10 text-center'>2</div>
          </div>
        </div>

        <div className='w-full col-span-1 md:col-span-2 flex flex-col gap-20 justify-center'>
          <div className="text-30 font-[700]">Second Phase (Pre-Reveal & Reveal)</div>

          <div className="max-w-700 text-15 font-[400]">
            You will get a glimpse of the rewards your ticket might be holding. This will be shown through a few unique animations that include the symbol of the question mark, perfectly matching the unsure atmosphere, full of thrill and risky plays.
          </div>
        </div>
      </div>

      <div className='container_ flex flex-col justify-center items-center py-100 px-30 md:px-35'>
        <div className='w-full grid grid-cols-1 gap-20 md:grid-cols-3'>
          <div className='flex flex-col justify-between items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-20 py-40 flex flex-col gap-35 justify-start'>
              <Image
                src={myltPurple}
                alt="min-lottery-img"
                className='w-full max-w-[60%] m-auto'
              />

              <div className='text-20 font-[600] text-center'>
                A reward from the top 100 prizes in the lottery
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-20 py-40 flex flex-col gap-35 justify-start'>
              <Image
                src={myltPurple}
                alt="min-lottery-img"
                className='w-full max-w-[60%] m-auto'
              />

              <div className='text-20 font-[600] text-center'>
                MYLT token-rewarding ticket
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-between items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-20 py-40 flex flex-col gap-35 justify-start'>
              <Image
                src={myltPurple}
                alt="min-lottery-img"
                className='w-full max-w-[60%] m-auto'
              />

              <div className='text-20 font-[600] text-center'>
                Losing ticket
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50 px-30'>
        <div className='relative w-full max-w-[450px] m-auto flex justify-center items-end'>
          <Image
            src={myltGold}
            alt="mylt-img"
            className='w-[50%] absolute -rotate-12 left-[0%]'
          />

          <Image
            src={myltGold}
            alt="mylt-img"
            className='w-[50%] z-10'
          />

          <Image
            src={myltGold}
            alt="mylt-img"
            className='w-[50%] absolute rotate-12 right-[0%]'
          />
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[300px] px-25 py-40 flex flex-col gap-20 justify-start'>
              <div className='text-25 font-[600] leading-10'>100 gold winning tickets</div>
              <div className='text-15 font-[300] leading-7'>
                If the animation shows a red question mark indicates that your going to win reward from 100 gold winning tickets. i.e. A reward from the top 100 prizes in the lottery.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 pt-100 pb-200 px-30'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[300px] px-25 py-40 flex flex-col gap-20 justify-start'>
              <div className='text-25 font-[600] leading-10'>1900 token winning tickets</div>
              <div className='text-15 font-[300] leading-7'>
                If the animation shows a blue question mark indicates that your going to win reward from 1900 token winning tickets. i.e. MYLT token-rewarding ticket.
              </div>
            </div>
          </div>
        </div>

        <div className='relative w-full max-w-[450px] m-auto flex justify-center items-end'>
          <Image
            src={myltRed}
            alt="mylt-img"
            className='w-[50%] absolute -rotate-12 left-[0%]'
          />

          <Image
            src={myltRed}
            alt="mylt-img"
            className='w-[50%] z-10'
          />

          <Image
            src={myltRed}
            alt="mylt-img"
            className='w-[50%] absolute rotate-12 right-[0%]'
          />
        </div>
      </div>
    </>
  )
} 