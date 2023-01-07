import Image from 'next/image'
import rolexImg from '../../assets/image/claimReward/rolex.png'

export const ClaimRewardPhysical_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-150 px-30 gap-80'>
        <div className='flex flex-col justify-center items-center gap-25'>
          <div className='text-40 font-[700] text-center leading-10'>Your Reward</div>

          <div className='max-w-[900px] text-20 font-[400] text-center Poppins'>
            Congratulations!, You won the Rolex Collection Watch. Now you’ll receive your reward at the address as you provided in the form and for further details will contact you by your mail.
          </div>
        </div>

        <div className=' flex justify-center items-center'>
          <Image src={rolexImg} alt="claim-img" className='w-full max-w-[300px]' />
        </div>
      </div>
    </>
  )
} 