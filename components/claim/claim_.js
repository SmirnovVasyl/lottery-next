import Image from 'next/image'

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

import claimImg1 from '../../assets/image/timeline/item1.png'
import claimImg2 from '../../assets/image/timeline/item2.png'
import claimImg3 from '../../assets/image/timeline/item3.png'
import claimImg4 from '../../assets/image/timeline/item4.png'
import claimImg5 from '../../assets/image/timeline/item5.png'
import claimImg6 from '../../assets/image/timeline/item6.png'



export const Claim_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-80 px-30 gap-80'>
        <div className='flex flex-col justify-center items-center gap-25'>
          <div className='text-40 font-[700] text-center leading-10'>Claim your prize</div>

          <div className='max-w-[900px] text-20 font-[400] text-center Poppins'>
            To claim your prize, you will need to fill out a form. This form will ask for some basic information, such as Lottery number and contact details. Once you have completed the form, you will be eligible to receive one of the various prizes being offered as a reward. The prize you receive will depend on the NFT and lottery. Good luck!
          </div>
        </div>

        <div className='relative w-full max-w-[450px] m-auto flex justify-center items-end'>
          <Image
            src={myltGold}
            alt="mylt-img"
            className='w-[50%] absolute -rotate-12 left-[0%]'
          />

          <Image
            src={myltPurple}
            alt="mylt-img"
            className='w-[50%] z-10'
          />

          <Image
            src={myltRed}
            alt="mylt-img"
            className='w-[50%] absolute rotate-12 right-[0%]'
          />
        </div>

        <div className='flex flex-col justify-center items-center gap-40 md:gap-80'>
          <div className='flex flex-row pt-30'>
            <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
              Mint Now
            </span>
          </div>

          <div className='max-w-[900px] text-20 font-[400] text-center Poppins'>
            A hundred lucky winners with the chance to feel the ownership of some of the most expensive and rare NFTs from collections like the Bored Ape Yacht Club, Mutant Ape Yacht Club, OO NFT collection, a few of the rarest Rolex watches that can be found, and the latest and cool Apple gadgets.
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 px-30 pb-100 gap-30'>
        <div className='flex flex-row m-auto'>
          <Image src={claimImg1} alt="claim-img" className='w-full max-w-130' />
        </div>

        <div className='flex flex-row m-auto'>
          <Image src={claimImg2} alt="claim-img" className='w-full max-w-130' />
        </div>

        <div className='flex flex-row m-auto'>
          <Image src={claimImg3} alt="claim-img" className='w-full max-w-130' />
        </div>

        <div className='flex flex-row m-auto'>
          <Image src={claimImg4} alt="claim-img" className='w-full max-w-130' />
        </div>

        <div className='flex flex-row m-auto'>
          <Image src={claimImg5} alt="claim-img" className='w-full max-w-130' />
        </div>

        <div className='flex flex-row m-auto'>
          <Image src={claimImg6} alt="claim-img" className='w-full max-w-130' />
        </div>
      </div>
    </>
  )
} 