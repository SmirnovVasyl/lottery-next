import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';

import chanceOfWinning from '../../assets/image/statistic/chanceOfWinning.png'
import LotteryWinners from '../../assets/image/statistic/LotteryWinners.png'
import Government from '../../assets/image/statistic/Government.png'
import ClaimedWinning from '../../assets/image/statistic/ClaimedWinning.png'

export const Statistic_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100 gap-10">
          <h1 className="text-40 font-[700] leading-[45px] text-center md:text-55 md:leading-[60px] px-10">
            <ScrollAnimation animateIn='zoomIn' initiallyVisible={true}>
              Statistic Of Lottery
            </ScrollAnimation>
          </h1>

          <h2 className="max-w-[90%] text-15 font-[400] leading-[120%] text-center md:text-20 md:leading-[150%] md:max-w-550">
            <ScrollAnimation animateIn='zoomIn' initiallyVisible={true}>
              Many people are obsessed with traditional lotteries, but projects like MYLT hide not one or two advantages. Dare to uncover them together?
            </ScrollAnimation>
          </h2>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50 overflow-hidden'>
        <ScrollAnimation animateIn='zoomIn' initiallyVisible={true}>
          <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
            <div className='flex flex-col text-25 leading-9 font-[700] md:text-[40px] md:leading-[52px]'>
              The Chance of Winning the Lottery is 1 to 300,000,000
            </div>

            <div className='text-20 leading-[30px] font-[400] Poppins pt-15'>
              There aren't any lotteries around, with over 75% winning tickets. The significant chance of winning will act as if the big bang was on Earth, unleashing powerful While enjoying traditional lotteries, you must be aware that the chances of you taking down the jackpot are pretty slim. Even winning a minor award is highly unlikely. Still, because of the incredibly hefty jackpots, players continue to lose money without any perspective or a decent chance of winning anything.
            </div>
          </div>
        </ScrollAnimation>

        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <ScrollAnimation animateIn='slideInRight' initiallyVisible={true}>
            <Image
              src={chanceOfWinning}
              alt="statistic-img"
              className='w-[80%]'
            />
          </ScrollAnimation>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <ScrollAnimation animateIn='slideInLeft' initiallyVisible={true}>
            <Image
              src={Government}
              alt="statistic-img"
              className='w-[80%]'
            />
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn='zoomIn' initiallyVisible={true}>
          <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
            <div className='flex flex-col text-25 leading-9 font-[700] md:text-[40px] md:leading-[52px]'>
              Government Takes Between 25%-45% of Your Lottery Winnings
            </div>

            <div className='text-20 leading-[30px] font-[400] Poppins pt-15'>
              Can you imagine winning hundreds of thousands from a lottery, only for the government to take almost half of it? Unfortunately, that's the reality in most countries nowadays. But this is also happening because conventional lotteries' prizes are almost always money, MYLT is an NFT lottery, so you won't have to pay any taxes on your winnings. Furthermore, from the MYLT lotteries, you will always receive valuable and collectible items instead of direct cash funds, which means they cannot be taxed in any way.
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50 overflow-hidden'>
        <ScrollAnimation animateIn='zoomIn' >
          <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
            <div className='flex flex-col text-25 leading-9 font-[700] md:text-[40px] md:leading-[52px]'>
              85% of Lottery Winners Stay Anonymous
            </div>

            <div className='text-20 leading-[30px] font-[400] Poppins pt-15'>
              At MYLT, you don't have to worry about that at all. Unless you don't explicitly want your identity to be revealed, you will begin fully anonymous 100% of the time. All the personal details that might be shared with the company will be used in full disclosure under the supervision of the best security protocols and defenses in the crypto and blockchain industry.
            </div>
          </div>
        </ScrollAnimation>

        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <ScrollAnimation animateIn='slideInRight' >
            <Image
              src={LotteryWinners}
              alt="statistic-img"
              className='w-[80%]'
            />
          </ScrollAnimation>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <ScrollAnimation animateIn='slideInLeft' >
            <Image
              src={ClaimedWinning}
              alt="statistic-img"
              className='w-[80%]'
            />
          </ScrollAnimation>
        </div>

        <ScrollAnimation animateIn='zoomIn' >
          <div className='w-full flex flex-col justify-center items-start px-20 md:px-50'>
            <div className='flex flex-col text-25 leading-9 font-[700] md:text-[40px] md:leading-[52px]'>
              98% of People Claimed Winning the Lottery Made Them Happier
            </div>

            <div className='text-20 leading-[30px] font-[400] Poppins pt-15'>
              Here at MYLT, we count on more than the significant jackpots to make our players happy. We created an innovative NFT lottery environment where everyone has an enormous chance of winning and can have endless fun by even flipping his tickets before the draw.
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
} 