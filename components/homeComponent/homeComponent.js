import Image from 'next/image'
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'
import lottery from '../../assets/image/road-map/Lottery.gif'
import star1 from '../../assets/image/Effect/star_1.png'
import star2 from '../../assets/image/Effect/star_2.png'
import star3 from '../../assets/image/Effect/star_3.png'
import star4 from '../../assets/image/Effect/star_4.png'
import lineEffect from '../../assets/image/Effect/line_effect.png'

import creatorFooter1 from '../../assets/image/creator/icon1.png'
import creatorFooter2 from '../../assets/image/creator/icon2.png'

import { slickSettings, creatorLists } from './home.config';

let position = '';
export const HomeComponent = () =>
{
  const [firstLoad, setFirstLoad] = useState(false)
  const [timeFormat, setTimeFormat] = useState('alternate')
  useEffect(() => { position = timeFormat; }, [timeFormat])
  useEffect(() =>
  {
    if (firstLoad) return; setFirstLoad(true);
    window.addEventListener('resize', () => { CalculatePosition(); }, false);
    CalculatePosition();
  }, [])

  const CalculatePosition = () =>
  {
    let position_ = 'left';
    if (window.innerWidth > 900) position_ = 'alternate';
    if (position_ !== position) setTimeFormat(position_);
  }

  return (
    <>
      <video className="top-0 left-0 object-cover w-screen h-screen" src="./video/MYLT_Subtitles.mp4" controls={false} />

      <div className='container_'>
        <div className='flex flex-col px-30 py-50 md:px-80 md:py-100 md:pb-200'>
          <ScrollAnimation animateIn='fadeIn' >
            <video src='./video/MYLT_firstSection.mp4' controls={true} />
          </ScrollAnimation>

          <div className='text-[35px] leading-[60px] font-[700] tracking-[0.04em] pt-30 pb-5 md:pt-80 md:pb-20 md:text-[45px]'>
            <ScrollAnimation animateIn='fadeIn'>
              What is MYLT?
            </ScrollAnimation>
          </div>

          <div className='text-[15px] leading-5 font-[300] md:text[22px] md:leading-8'>
            <ScrollAnimation animateIn='fadeIn'>
              MYLT - “Mint Your Lottery Ticket”- is an Ethereum-based lottery where people can play and have fun while winning significant prizes. People purchase NFT's from the MYLT Lottery Collection and they become their playing ticket. MYLT offers the unique opportunity of profit from people's chance by letting them sell/auction their winning tickets. This decreases the risk as people can win from the lottery itself, either winning prizes or tokens to buy free tickets for future lotteries, or even flip their NFT's for profit in the early stages. It's all about the people and their freedom in choosing how to profit from their chance.
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* <div className='bg-[#ffffff0a] backdrop-blur-[5.5px]'> */}
      <div className='container_ relative grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <ScrollAnimation animateIn='fadeIn'>
          <div className='flex flex-col items-center justify-end'>
            <div className='relative'>
              <Image src={lottery} alt="logo-img" className='w-full' />

              <Image src={star1} alt="star-effect" className='absolute top-[3%] right-[30%]' />
              <Image src={star2} alt="star-effect" className='absolute top-[65%] right-[3%] ' />
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn'>
          <div className='w-full flex flex-col justify-end items-start p-25 md:p-0 md:pr-50'>
            <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>Why choose us?</div>
            <div className='text-[18px] leading-[25px] font-[300] Poppins'>
              MYLT offers the unique opportunity of profit from people's chance by letting them sell/auction their winning tickets.
              This decreases the risk as people can win from the lottery itself, either winning prizes or tokens to buy free tickets for future lotteries, or even flip their NFT's for profit in the early stages. It's all about the people and their freedom in choosing how to profit from their chance.
            </div>

            <div className='flex flex-row pt-30'>
              <div className='connect_wallet-btn px-30 py-20 cursor-pointer'>
                Connect Wallet
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <Image src={lineEffect} alt="line-effect"
          className='absolute right-0 -top-[90%] w-[50%] hidden lg:flex'
        />
      </div>
      {/* </div> */}

      <div className='fourth-section-bg'>
        <div className='relative'>
          <div className='container_ flex flex-col justify-center items-center py-80 px-35 z-10'>
            <div className='text-[45px] font-[700] z-10'>
              <ScrollAnimation animateIn='fadeIn'>
                The Intersteller Story
              </ScrollAnimation>
            </div>

            <div className='text-[16px] font-[200] max-w-500 text-center Poppins z-10'>
              <ScrollAnimation animateIn='fadeIn'>
                Our lottery might not octually come from this planel. As rare  as the antimatior you can find on Earth
              </ScrollAnimation>
            </div>

            <div className='timeline-wrapper w-full py-50 z-10 overflow-hidden'>
              <Timeline position={timeFormat}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: 'unset' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image1 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn={`${timeFormat === 'alternate' ? 'bounceInRight' : 'bounceInLeft'}`}>
                      <div className='timelineBox_contain'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>BAYC NFT</div>
                            <div className='text-[15px] font-[100]'>
                              The NFT collection took over the world in only a few months. Owning an NFT from BAYC is already more like a high-status symbol and a pretty expensive one to say the least. With only 10,000 NFTs in circulation and a floor price of 65 ETH ($75,000) per NFT in the latter stages of the 2022 bear market, this can quickly become one of your most profitable holdings when the NFTs restore their value in the upcoming bull run. Some BAYC NFT owners include Eminem, Neymar Jr, Justin Bieber, and potentially… you?
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image2 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn='bounceInLeft'>
                      <div className='timelineBox_contain2'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>MAYC NFT</div>
                            <div className='text-[15px] font-[100]'>
                              Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800). Not bad, considering that we are in the worst bear market in the last five years. All MAYC holders get multiple benefits as the project is closely associated with the BAYC, which will skyrocket the value of these NFTs in the next cycle.
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image3 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn={`${timeFormat === 'alternate' ? 'bounceInRight' : 'bounceInLeft'}`}>
                      <div className='timelineBox_contain'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>OTHERSIDE NFT</div>
                            <div className='text-[15px] font-[100]'>
                              Owning land in the real world can be expensive, so why not transition to the Metaverse? The Otherside NFT collection is one of the most extensive in the world of NFTs. Considering it has over 99,000 NFTs, it's crazy to think that the floor price per Otherside NFT stands at 1.10 ETH ($1,300), which is more than the late 2022 price of Ethereum! But these NFTs aren't like many others in the market. They are digital lands that can be used in the unique Otherside game. So, it won't be a surprise if the current value of the Otherside NFTs triples in the near future. And you can easily win them here at MYLT!
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image4 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn='bounceInLeft'>
                      <div className='timelineBox_contain2'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>Four Collectionary Rolex Watches</div>
                            <div className='text-[15px] font-[100]'>
                              Rolex watches will never go out of trend. It is one of the most luxurious items to have on your wrist. And deservedly, this is one of the best investments you can make. Over time the price of some collection Rolex watches has increased drastically. So, it's safe to say the four Rolex watches you can win from MYLT can turn into a fortune in the future.
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image5 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn={`${timeFormat === 'alternate' ? 'bounceInRight' : 'bounceInLeft'}`}>
                      <div className='timelineBox_contain'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>Apple Products</div>
                            <div className='text-[15px] font-[100]'>
                              In the digital era, technological gadgets are incredibly useful in our daily life. And when it comes to products like these, the first company that comes to mind is Apple. From our MYLT lottery, you can win the latest Apple devices that will help with your productivity tasks and entertainment for years to come.
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <ScrollAnimation animateIn='fadeIn'>
                      <TimelineDot className='timeline_image6 w-50 md:w-80 xl:w-120 h-50 md:h-80 xl:h-120 p-0 border-0' />
                    </ScrollAnimation>
                    <TimelineConnector sx={{ backgroundColor: 'unset' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <ScrollAnimation animateIn='bounceInLeft'>
                      <div className='timelineBox_contain2'>
                        <div className='timeline-border-bg'>
                          <div className='px-15 py-10'>
                            <div className='text-[35px] font-[700]'>MYLT TOKENS</div>
                            <div className='text-[15px] font-[100]'>
                              The MYLT tokens are at the core of your significant winning chance in our lottery. When playing frequently, you will encounter them as winning prizes and begin to stack them. You should know that these tokens are unique tools that are extremely valuable as they can be used for buying tickets from all the MYLT lotteries. Of course, you would need enough of them to make a purchase, so hope for the winning tickets to bring you many tokens at once.
                            </div>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>

            <div className='flex flex-row justify-center z-10'>
              <ScrollAnimation animateIn='fadeIn'>
                <div className={`connect_wallet-btn px-50 py-10 cursor-pointer select-none`}>
                  Mint
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <Image src={star3} alt="star-effect" className='absolute top-[8%] right-[10%] z-0' />
          <Image src={star4} alt="star-effect" className='absolute top-[5%] right-[15%] z-0 ' />
          <Image src={star4} alt="star-effect" className='absolute top-[95%] left-[5%] z-0 ' />
        </div>

        {/* <div className='bg-[#ffffff0a] backdrop-blur-[5.5px]'> */}
        <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50 overflow-hidden'>
          <div className='w-full flex flex-col justify-end items-start px-20 md:px-50'>
            <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>
              <ScrollAnimation animateIn='fadeIn'>
                75%+ Winning Tickets
              </ScrollAnimation>
            </div>

            <div className='text-[18px] leading-[25px] font-[300] Poppins'>
              <ScrollAnimation animateIn='fadeIn'>
                There aren't any lotteries around, with over 75% winning tickets. The significant chance of winning will act as if the big bang was on Earth, unleashing powerful waves of players who constantly flip their tickets for profit. All in search of the enormous jackpot prize coming from the depths of the galaxy. The NFT supply for our lottery is only 2,000 tickets, so hurry up before they are all gone.
              </ScrollAnimation>
            </div>

            <div className='flex flex-row pt-30'>
              <ScrollAnimation animateIn='bounceInLeft'>
                <div className='connect_wallet-btn px-30 py-15 cursor-pointer'>
                  Connect Wallet
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <ScrollAnimation animateIn='bounceInRight'>
            <div className='flex flex-col items-center justify-end pt-50 md:pt-0'>
              <Image
                unoptimized={true}
                src={myltPurple}
                alt="logo-img"
                className='w-[80%] max-w-[300px]'
              />
            </div>
          </ScrollAnimation>
        </div>
        {/* </div> */}
      </div>

      <div className='fifth-section-bg'>
        <div className='container_ flex flex-col justify-center items-center py-80 px-35'>
          <div className='text-[30px] font-[700] leading-[35px] md:leading-[50px] max-w-[500px] text-center md:text-[45px] pb-20'>
            <ScrollAnimation animateIn='fadeInDown'>
              Cheaper Tickets in Our Community Whitelist
            </ScrollAnimation>
          </div>

          <div className='text-[16px] font-[200] max-w-[800px] text-center Poppins pb-80'>
            <ScrollAnimation animateIn='fadeIn'>
              For our first lottery, 800 addresses from our community whitelist will receive the chance to exploit three unique bundle offers to increase their chance of winning. The maximum number of tickets that can be sold at bundle prices is only 900.
            </ScrollAnimation>
          </div>

          <div className='w-full grid grid-cols-1 gap-50 sm:grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col justify-center items-center'>
              <ScrollAnimation animateIn='flipInY'>
                <div className='box-border-image w-full max-w-[250px] px-40 py-50'>
                  <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                    <div>Buy 1</div>
                    <div>NFT tickets at</div>
                  </div>

                  <div className='text-[18px] font-[500] pt-20'>
                    0.6 ETH
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <ScrollAnimation animateIn='flipInY'>
                <div className='box-border-image w-full max-w-[250px] px-40 py-50'>
                  <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                    <div>Buy 2</div>
                    <div>NFT tickets at</div>
                  </div>

                  <div className='text-[18px] font-[500] pt-20'>
                    0.58 ETH
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <ScrollAnimation animateIn='flipInY'>
                <div className='box-border-image w-full max-w-[250px] px-40 py-50'>
                  <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                    <div>Buy 4</div>
                    <div>NFT tickets at</div>
                  </div>

                  <div className='text-[18px] font-[500] pt-20'>
                    0.5 ETH
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation animateIn='zoomIn'>
        <div className='slider-wrapper_ container_ pt-50'>
          <Slider {...slickSettings}>
            {creatorLists.map((list, key) => (
              <div className='creator-slick-item-contain' key={key}>
                <div className='box-border-image px-25 py-35'>
                  <Image
                    src={list.user_img}
                    alt="creator-img"
                    className='w-full'
                  />

                  <div className='flex flex-row justify-between pt-25'>
                    <span className='text-15 font-[400]'>{list.name}</span>
                    <div className='flex gap-10'>
                      <Image
                        src={creatorFooter1}
                        alt="creator-img_f"
                        className='w-full'
                      />
                      <Image
                        src={creatorFooter2}
                        alt="creator-img_f"
                        className='w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animateIn='zoomIn'>
        <div className='slider-wrapper_revert container_ pb-100 pt-15'>
          <Slider {...slickSettings}>
            {creatorLists.map((list, key) => (
              <div className='creator-slick-item-contain' key={key}>
                <div className='box-border-image px-25 py-35'>
                  <Image
                    src={list.user_img}
                    alt="creator-img"
                    className='w-full'
                  />

                  <div className='flex flex-row justify-between pt-25'>
                    <span className='text-15 font-[400]'>{list.name}</span>
                    <div className='flex gap-10'>
                      <Image
                        src={creatorFooter1}
                        alt="creator-img_f"
                        className='w-full'
                      />

                      <Image
                        src={creatorFooter2}
                        alt="creator-img_f"
                        className='w-full'
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ScrollAnimation>
    </>
  )
}