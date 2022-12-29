import Image from 'next/image'
import Slider from "react-slick";

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

import { slickSettings } from '../dashboardMain/dashboardMain.config'

export const MintLottery3_ = () =>
{
  return (
    <>
      <div className='container_ grid grid-cols-1 md:grid-cols-3 gap-20 py-100 px-30 '>
        <div className='flex flex-col justify-start items-center'>
          <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-50 justify-center'>
            <div className='text-35 font-[700] leading-8 text-center'>PHASE</div>
            <div className='text-60 font-[700] leading-10 text-center'>3</div>
          </div>
        </div>

        <div className='w-full col-span-1 md:col-span-2 flex flex-col gap-20 justify-center'>
          <div className="text-30 font-[700]">Third Phase (Reveal & Auction)</div>

          <div className="max-w-700 text-15 font-[400]">
            In the reveal phase, you can clearly see the price you are winning from the particular MYLT lottery. You can immediately receive offers for their holdings on Opensea.
          </div>
        </div>
      </div>

      <div className='container_ pb-100 px-50'>
        <Slider {...slickSettings}>
          <div className='flex slick-item'>
            <Image
              src={myltRed}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltGold}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltRed}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltGold}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltRed}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltGold}
              alt="dashboard-slick-img"
              className=''
            />
          </div>
        </Slider>
      </div>
    </>
  )
} 