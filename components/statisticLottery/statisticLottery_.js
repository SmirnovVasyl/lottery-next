import Image from 'next/image'

import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'
import LineEffect from '../../assets/image/statistic/LineEffect.png'


export const StatisticLottery_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100">
          <h1 className="max-w-[90%] md:max-w-550 text-30 font-[700] leading-[35px] text-center md:text-45 md:leading-[50px]">
            Immerse Into the Interstellar Lottery Now
          </h1>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-50 md:gap-0 px-30 py-80'>
        <div className='w-full relative max-w-[450px] m-auto flex justify-center items-center md:justify-end md:items-end z-10'>
          <Image
            src={myltPurple}
            alt="statistic-img"
            className='w-[80%] md:w-[50%] mr-50'
          />

          <Image
            src={myltPurple}
            alt="statistic-img"
            className='w-[80%] md:w-[50%] absolute rotate-12 -bottom-10 right-0'
          />
        </div>

        <div className='w-full h-full flex flex-col justify-center items-start gap-20 md:gap-0 z-0'>
          <div className='relative w-full max-w-280 flex-1 flex flex-col items-start justify-center pl-0 md:pl-50'>
            <h1 className='text-30 font-[700]'>800</h1>
            <h2 className='text-20 font-[400]'>Live Tickets Available</h2>

            <Image src={LineEffect}
              alt="statistic-img"
              className='absolute w-[50%] -left-[35%] hidden md:flex'
            />
          </div>

          <div className='relative w-full max-w-280 flex-1 flex flex-col items-start justify-center pl-0 md:pl-50'>
            <h2 className='text-20 font-[400]'>Total Price</h2>
            <h1 className='text-30 font-[700]'>0.5 ETH</h1>

            <Image src={LineEffect}
              alt="statistic-img"
              className='absolute w-[50%] -left-[35%] hidden md:flex'
            />
          </div>
        </div>
      </div>

      <div className='container_ flex flex-col justify-center items-center py-80 px-35'>
        <div className='w-full grid grid-cols-1 gap-50 sm:grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-[250px] p-40'>
              <div className='text-20 font-[300] text-[#bfb4b4]'>1 Ticket at</div>
              <div className='text-25 font-[700]'>0.6 ETH</div>

              <div className='flex flex-row pt-40'>
                <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
                  Mint Now
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-[250px] p-40'>
              <div className='text-20 font-[300] text-[#bfb4b4]'>2 Ticket at</div>
              <div className='text-25 font-[700]'>0.58 ETH</div>

              <div className='flex flex-row pt-40'>
                <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
                  Mint Now
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <div className='box-border-image w-full max-w-[250px] p-40'>
              <div className='text-20 font-[300] text-[#bfb4b4]'>3 Ticket at</div>
              <div className='text-25 font-[700]'>0.5 ETH</div>

              <div className='flex flex-row pt-40'>
                <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
                  Mint Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ flex flex-col justify-center items-center py-80 px-30 gap-25'>
        <div className='text-40 font-[700] text-center leading-10'>Mylt Your Lottery Ticket Now!</div>
        <div className='max-w-[900px] text-[16px] font-[200] text-center Poppins'>
          Sometimes, winning the lottery is all about SPEED. Will you let all the other players exploit the bundle offers and increase their winning chances while you hesitate? The stakes are high, and there is a shortage of top prizes. So, embrace your luck and mint as many lottery tickets as possible before they are gone!
        </div>

        <div className='flex flex-row pt-40'>
          <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
            Mint Now
          </span>
        </div>
      </div>
    </>
  )
} 