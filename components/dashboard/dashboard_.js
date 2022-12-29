import Image from 'next/image'
import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

export const Dashboard_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-80 px-30 gap-80'>
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

        <div className='flex flex-col justify-center items-center gap-25'>
          <div className='text-40 font-[700] text-center leading-10'>Mylt Your Lottery Ticket Now!</div>
          <div className='max-w-[900px] text-20 font-[400] text-center Poppins'>
            Sometimes, winning the lottery is all about SPEED. Will you let all the other players exploit the bundle offers and increase their winning chances while you hesitate? The stakes are high, and there is a shortage of top prizes. So, embrace your luck and mint as many lottery tickets as possible before they are gone!
          </div>

          <div className='flex flex-row pt-30'>
            <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
              Mint Now
            </span>
          </div>
        </div>
      </div>
    </>
  )
} 