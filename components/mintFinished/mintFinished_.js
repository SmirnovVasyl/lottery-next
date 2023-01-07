import Image from 'next/image'
import rolexImg from '../../assets/image/claimReward/rolex.png'

export const MintFinished_ = () =>
{
  return (
    <>
      <div className='container_ flex flex-col py-150 px-30 gap-30'>
        <div className='flex flex-col justify-center items-center gap-25'>
          <div className='max-w-700 text-30 md:text-35 font-[500] text-center leading-10'>
            Minting stage has finished but don't worry, you can still play!
          </div>

          <div className='max-w-[900px] text-15 font-[500] text-left Poppins'>
            MYLT allows everyone to get tickets even after the mint phase. You can acquire tickets from players at OpenSea at any time. Even after the draw! Here's how it works:
          </div>
        </div>

        <div className='max-w-[900px] w-full m-auto flex flex-col gap-30'>
          <span className='text-15 font-[500] text-left Poppins'>MYLT has three phases:</span>

          <ul className='circle-list'>
            <li className='text-15 font-[500] text-left'>
              Mint day through Pre-Reveal, where people can mint their first tickets. This phase is already finished. The tickets go away too fast!
            </li>

            <li className='text-15 font-[500] text-left'>
              Pre-reveal through Reveal, where ticket holders know if the won or not some prize, but they don't know which prize in case they did! You can get one of these and play your chances!
            </li>

            <li className='text-15 font-[500] text-left'>
              Reveal and Auction phase, where all prizes are disclosed and everyone knows what they get. You can buy a winning ticket and claim the prize for yourself!
            </li>
          </ul>

          <span className='text-15 font-[500] text-left Poppins'>
            We are currently at PLACE HERE CURRENT PHASE. That means that EXPLAIN THE CURRENT SITUATION. So you can go to OpenSea and look for the ticket you like the most!
          </span>
        </div>

        <div className='flex flex-row justify-center items-center pt-30'>
          <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
            Take me to OpenSea
          </span>
        </div>
      </div>
    </>
  )
} 