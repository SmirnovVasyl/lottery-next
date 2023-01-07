import Image from 'next/image'
import rolexImg from '../../assets/image/claimReward/rolex.png'



export const ClaimForm_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-80 px-30 gap-80 justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-30'>
          <Image src={rolexImg} alt="rolex-img" className='max-w-[100%]' />

          <div className='text-30 font-[700] text-center'>
            You're claiming an Rolex Collection Watch!
          </div>
        </div>

        <div className='max-w-400 w-full flex flex-col gap-20'>
          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Full name*</span>
            <input className='input' placeholder='Enter Full name' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Date of birth</span>
            <input className='input' placeholder='Select Date of birth' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Email*</span>
            <input className='input' placeholder='Enter email address' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Telephone number*</span>
            <input className='input' placeholder='Enter your telephone number' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Address (two lines)*</span>
            <input className='input' placeholder='Enter your address' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>City*</span>
            <input className='input' placeholder='Enter City' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>Country*</span>
            <input className='input' placeholder='Enter country name' />
          </div>

          <div className='flex flex-col gap-5'>
            <span className='text-15 font-[500]'>ZIP code*</span>
            <input className='input' placeholder='Enter your ZIP code' />
          </div>

          <span className='mint-btn-color rounded-md text-15 font-[500] px-30 py-10 cursor-pointer select-none text-center'>
            Mint Now
          </span>
        </div>
      </div>
    </>
  )
} 