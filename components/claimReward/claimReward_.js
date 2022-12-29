import Image from 'next/image'
import claimReward from '../../assets/image/claimReward/claimReward-img.png'

export const ClaimReward_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-80 px-30 gap-80'>
        <div className='flex flex-col justify-center items-center gap-25'>
          <div className='text-40 font-[700] text-center leading-10'>Your Reward</div>

          <div className='max-w-[900px] text-20 font-[400] text-center Poppins'>
            Congratulations!, You won the RANK #0001 NFT Lottery ticket. Now to claim it you need to click on the claim your prize button and connect to metamask and can receive your reward.
          </div>
        </div>

        <div className=' flex justify-center items-center'>
          <Image src={claimReward} alt="claim-img" className='w-full max-w-[300px]' />
        </div>

        <div className='flex flex-row items-center justify-center pt-30'>
          <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
            Claim your prize
          </span>
        </div>
      </div>
    </>
  )
} 