import Image from 'next/image'
import Slider from "react-slick";

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

import { slickSettings } from './dashboardMain.config';

export const DashboardMain1_ = () =>
{
  return (
    <>
      <div className='container_ grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-20 pt-100 px-20 '>
        <div className='flex flex-col justify-start items-center'>
          <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-50 justify-center'>
            <div className='text-35 font-[700] leading-8 text-center'>PHASE</div>
            <div className='text-60 font-[700] leading-10 text-center'>1</div>
          </div>
        </div>

        <div className='w-full col-span-1 xl:col-span-2 flex flex-col gap-20'>
          <div className='flex felx-col justify-center max-w-250 md:max-w-[100%] m-auto'>
            <div className='text-30 xl:text-40 font-[700] text-center'>Next stage is going to start in</div>
          </div>

          <div className='flex-1 grid grid-cols-3 select-none'>
            <div className='flex flex-col justify-center items-center gap-10'>
              <div className='flex flex-row gap-10'>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
              </div>
              <div className='text-15'>DAYS</div>
            </div>

            <div className='flex flex-col justify-center items-center gap-10'>
              <div className='flex flex-row gap-10'>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
              </div>
              <div className='text-15'>HOURS</div>
            </div>

            <div className='flex flex-col justify-center items-center gap-10'>
              <div className='flex flex-row gap-10'>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
                <div className='time-count-box digital-numbers text-20 md:text-25 xl:text-30 font-[400] p-5'>0</div>
              </div>
              <div className='text-15'>MINUTES</div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start items-center'>
          <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-50 justify-center'>
            <div className='text-35 font-[700] leading-8 text-center'>Price pool value</div>
            <div className='text-60 font-[700] leading-10 text-center'>
              350<span className='text-20 font-[700]'> ETH</span>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ py-100 px-50'>
        <Slider {...slickSettings}>
          <div className='flex slick-item'>
            <Image
              src={myltGold}
              alt="dashboard-slick-img"
              className=''
            />
          </div>

          <div className='flex slick-item'>
            <Image
              src={myltPurple}
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
              src={myltPurple}
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
        </Slider>
      </div>

      <div className='container_ flex flex-col justify-center items-center pb-200 px-20 md:px-35'>
        <div className='w-full grid grid-cols-1 gap-50 md:grid-cols-3'>
          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-35 justify-center'>
              <div className='text-20 font-[700] leading-8 text-center'>Winning Chance</div>
              <div className='text-40 font-[700] leading-10 text-center'>86 %</div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-35 justify-center'>
              <div className='text-20 font-[700] leading-8 text-center'>average earnings in ETH</div>
              <div className='text-40 font-[700] leading-10 text-center'>320<span className='text-20'> ETH</span></div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-35 justify-center'>
              <div className='text-20 font-[700] leading-8 text-center'>Estimated Average Tokens</div>
              <div className='text-40 font-[700] leading-10 text-center'>326</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 