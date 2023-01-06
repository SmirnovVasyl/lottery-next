import Image from 'next/image'
import FadeIn from 'react-fade-in';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import lottery from '../../assets/image/road-map/Lottery.gif'
import NicheLotteries from '../../assets/image/road-map/NicheLotteries.png'
import Metaverse from '../../assets/image/road-map/Metaverse.png'


export const RoadMap_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100 gap-10">
          <h1 className="text-40 font-[700] leading-[60px] text-center md:text-55 md:leading-[60px]">
            <FadeIn delay={300}>Roadmap</FadeIn>
          </h1>

          <h2 className="max-w-[90%] text-15 font-[400] leading-[120%] text-center md:text-20 md:leading-[150%] md:max-w-550">
            <FadeIn delay={350}>
              The success of every NFT project is all about a clear vision. So we will share with you how we plan to change the NFT lottery industry with our unique MYLT project.
            </FadeIn>
          </h2>
        </div>
      </div>

      <div className="container_ py-50">
        <div className="max-w-800 mx-auto">
          <h1 className="text-40 font-[700] leading-[60px] text-center md:text-55 md:leading-[60px]">
            <FadeIn delay={400}>
              What to expect from our innovative MYLT NFT Lottery?
            </FadeIn>
          </h1>
        </div>

        <FadeIn delay={300}>
          <div className='timelineBox-type3 w-[50%] mx-auto mt-50'>
            <div className='timelineBox'>
              <div className='px-15 py-10'>
                <div className='text-[35px] font-[700] text-center'>Initial MYLT Lotteries</div>
                <div className='text-[15px] font-[100] text-center'>
                  Our journey begins with our initial first few lotteries. They will have general rewards like NFTs, Rolex watches, or gadgets and fall into four categories: G0, G1, G2, and G3. Your chance of winning something in these lotteries varies between 25% and 100%! And the best thing is that each lottery has exclusive token rewards you can use to buy tickets for the new lotteries. In other words, it will be like a never-ending exciting game, each with a shot at the top prizes!
                </div>
              </div>
            </div>
          </div>

          <Timeline className='roadMap-timeline'>
            <TimelineItem>
              <TimelineOppositeContent />

              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: 'unset' }} />
                <TimelineDot color='warning' />
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
              </TimelineSeparator>

              <TimelineContent />
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <div className='timelineBox-type1'>
                  <div className='timelineBox'>
                    <div className='px-15 py-10'>
                      <div className='text-[35px] font-[700]'>Creating an NFT Lottery Tickets Marketplace</div>
                      <div className='text-[15px] font-[100]'>
                        Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800). Not bad, considering that we are in the worst bear market in the last five years.
                      </div>
                    </div>
                  </div>
                </div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                <TimelineDot color='warning' />
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
              </TimelineSeparator>

              <TimelineContent>
                <Image src={lottery} alt="timeline-img" className='h-[100%]' />
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Image src={NicheLotteries} alt="timeline-img" className='h-[100%]' />
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                <TimelineDot color='warning' />
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
              </TimelineSeparator>

              <TimelineContent>
                <div className='timelineBox-type2'>
                  <div className='timelineBox'>
                    <div className='px-15 py-10'>
                      <div className='text-[35px] font-[700]'>Introducing Niche Lotteries</div>
                      <div className='text-[15px] font-[100]'>
                        Not two players think alike. Therefore, having the same general awards for our MYLT lotteries won't be optimal.
                        So, in our marketplace, we will introduce various niche lotteries that cover shiny toys you can win, like watches, fine art, supercars, and whatever you can think of!
                      </div>
                    </div>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <div className='timelineBox-type1'>
                  <div className='timelineBox'>
                    <div className='px-15 py-10'>
                      <div className='text-[35px] font-[700]'>Building Our Own Metaverse </div>
                      <div className='text-[15px] font-[100]'>
                        Nothing beats the nerve-wracking emotions while playing a game of chance live. And the blockchain Metaverse is the only place you can get as close to that feeling as possible. After the initial success of our innovative lotteries, we plan to integrate them into our own Metaverse all our NFT holders can join. It will be plenty of fun!
                      </div>
                    </div>
                  </div>
                </div>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                <TimelineDot color='warning' />
                <TimelineConnector sx={{ backgroundColor: 'unset' }} />
              </TimelineSeparator>

              <TimelineContent>
                <Image src={Metaverse} alt="timeline-img" className='h-[100%]' />
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </FadeIn>
      </div>
    </>
  )
} 