import Image from 'next/image'
import Slider from "react-slick";

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

import { slickSettings } from './dashboardMain.config';

export const DashboardMain_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col gap-30 px-20 pt-100'>
        <div className='grid grid-cols-12 gap-20 '>
          <div className='dashboard-box col-span-3'>
            <div className='dashboard-box-header'>Currrent Phase</div>
            <div className='dashboard-box-body'>Phase 1</div>
          </div>

          <div className='dashboard-box col-span-3'>
            <div className='dashboard-box-header'>Currrent Phase</div>
            <div className='dashboard-box-body'>Minted</div>
          </div>

          <div className='dashboard-box col-span-6'>
            <div className='dashboard-box-header'>Countdown to Next Stage</div>
            <div className='dashboard-box-body'>Pre-Reveal in 1d 13h 56m 17s</div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-20'>
          <div className='dashboard-box col-span-7'>
            <div className='dashboard-box-header'>Winning Chance</div>
            <div className='dashboard-box-body'>

            </div>
          </div>

          <div className='col-span-5'>
            <div className='grid grid-rows-2 gap-20'>
              <div className='dashboard-box col-span-3'>
                <div className='dashboard-box-header'>Expected Average Earnings</div>
                <div className='dashboard-box-body'>0.15 ETH</div>
              </div>

              <div className='dashboard-box col-span-3'>
                <div className='dashboard-box-header'>Expected Average Tokens</div>
                <div className='dashboard-box-body'>5,075</div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-20'>
          <div className='dashboard-box col-span-5'>
            <div className='dashboard-box-header'>Prize Pool Volume</div>
            <div className='dashboard-box-body'>300ETH</div>
          </div>

          <div className='dashboard-box col-span-7'>
            <div className='dashboard-box-header'>Lottery Statistics</div>
            <div className='dashboard-box-body'>

            </div>
          </div>
        </div>
      </div>

      <div className='container_ py-100 px-50 flex flex-col gap-50'>
        <div className='text-40 font-[700] text-center leading-10'>
          Mylt Your Lottery Ticket Now!
        </div>

        <div className='text-20 font-[400] text-center Poppins'>
          Sometimes, winning the lottery is all about SPEED. Will you let all the other players exploit the bundle offers and increase their winning chances while you hesitate? The stakes are high, and there is a shortage of top prizes. So, embrace your luck and mint as many lottery tickets as possible before they are gone!
        </div>

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

        <div className='flex flex-row pt-30 items-center justify-center'>
          <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
            Connect Wallet
          </span>
        </div>
      </div>
    </>
  )
} 