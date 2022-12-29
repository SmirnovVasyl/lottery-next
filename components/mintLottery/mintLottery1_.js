import Image from 'next/image'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

export const MintLottery1_ = () =>
{
  return (
    <>
      <div className='container_ grid grid-cols-1 md:grid-cols-3 gap-20 py-100 px-30 '>
        <div className='flex flex-col justify-start items-center'>
          <div className='box-border-image w-full h-full max-w-[250px] px-30 py-50 flex flex-col gap-50 justify-center'>
            <div className='text-35 font-[700] leading-8 text-center'>PHASE</div>
            <div className='text-60 font-[700] leading-10 text-center'>1</div>
          </div>
        </div>

        <div className='w-full col-span-1 md:col-span-2 flex flex-col gap-20 justify-center'>
          <div className="text-30 font-[700]">First Phase (Minting & Pre-Reveal)</div>

          <div className="text-15 font-[400]">
            There are two purchase stages: Private Mint and Public Mint.
            Private Mint. A total of 1000 NFT's from the Collection are offered at an early access for only whitelisted members of the community.
            Public Mint. The remaining 1000 NFT's are open for purchase for the whole community.
          </div>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
        <div className='w-full flex flex-col justify-center items-start px-30 md:px-50'>
          <div className='flex flex-col'>
            <span className='text-[35px] leading-[30px] font-[600] md:text-[45px]'>First Phase</span>
            <span className='text-[20px] leading-[60px] font-[600] md:text-[25px]'>(Mylting Your NFT Tickets)</span>
          </div>
          <div className='text-[18px] leading-[25px] font-[300] Poppins'>
            Your lottery journey will begin when you mint your first few tickets. The process is just like in a traditional lottery and will go underway in three different ticket offerings.
          </div>
        </div>

        <div className='flex flex-col items-center justify-center pt-50 md:pt-0'>
          <Image
            unoptimized={true}
            src={myltPurple}
            alt="logo-img"
            className='w-[80%] max-w-[300px]'
          />
        </div>
      </div>

      <div className='container_ flex flex-col justify-center items-center py-100 px-30 md:px-35'>
        <div className='w-full grid grid-cols-1 gap-20 md:grid-cols-3'>
          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-25 py-40 flex flex-col gap-35 justify-start'>
              <div className='text-25 font-[600] leading-10'>VIP Whitelist Offering</div>
              <div className='text-15 font-[300] leading-7'>
                Users with access to our VIP whitelist offering can enter the minting page 15 minutes before everyone else. With the minting of one ticket, each player gets one more for free. The sale is limited to only one offer per player.
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-25 py-40 flex flex-col gap-35 justify-start'>
              <div className='text-25 font-[600] leading-10'>Private Offering</div>
              <div className='text-15 font-[300] leading-7'>
                The more you buy in the private offering, the less you will pay. For one ticket, you will pay 0.6 ETH. Buying two wickets will cost you 0.58 ETH each. And finally, buying four tickets or more will come for 0.5 ETH (with an interval). Every player can get up to five tickets when using this bundle offer.
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start items-center'>
            <div className='box-border-image w-full h-full max-w-[350px] px-25 py-40 flex flex-col gap-35 justify-start'>
              <div className='text-25 font-[600] leading-10'>Public Offering</div>
              <div className='text-15 font-[300] leading-7'>
                The public offering is when our minting page opens up for the public. All players can join and buy tickets, but they won't be able to take advantage of any unique offers.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_ flex flex-col gap-20 justify-center items-center py-50 px-30'>
        <div className="text-30 font-[700] text-center">Mylt Your Lottery Ticket Now!</div>

        <div className="max-w-800 text-15 font-[400] text-center">
          Sometimes, winning the lottery is all about SPEED. Will you let all the other players exploit the bundle offers and increase their winning chances while you hesitate? The stakes are high, and there is a shortage of top prizes. So, embrace your luck and mint as many lottery tickets as possible before they are gone!
        </div>

        <div className='text-15 font-[400] text-center'>Select number of NFT's you want to mint.</div>

        <div className='flex flex-row justify-center items-center gap-10 text-25 font-[700] leading-3'>
          <div className='bg-[#111111] rounded-full border border-[#9393935e] cursor-pointer p-10'><RemoveIcon /></div>
          <div className='bg-[#111111] rounded-lg border border-[#9393935e] cursor-pointer p-15'>2</div>
          <div className='bg-[#111111] rounded-full border border-[#9393935e] cursor-pointer p-10'><AddIcon /></div>
        </div>

        <div className='flex flex-row'>
          <span className='mint-btn-1 text-20 font-[500] leading-6 px-30 py-10 cursor-pointer select-none'>
            Mint Now
          </span>
        </div>
      </div>
    </>
  )
} 