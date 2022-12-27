import Image from 'next/image'
import lottery from '../../assets/image/load-map/Lottery.gif'
import lineEffect from '../../assets/image/Effect/line_effect.png'

export const AboutUs_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100">
          <h1 className="text-40 font-[700] leading-[60px] text-center md:text-55 md:leading-[60px]">
            About Us
          </h1>

          <h2 className="max-w-[90%] text-15 font-[400] leading-[120%] text-center md:text-20 md:leading-[150%] md:max-w-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus magna viverra viverra fermentum.Cras eget justo vitae ex
          </h2>
        </div>
      </div>

      <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-30 py-50 px-25 md:gap-45 xl:gap-100 md:py-100'>
        <div className='flex flex-col items-center justify-center'>
          <video src='./video/MYLT_firstSection.mp4' autoPlay muted loop className='w-Full' />
        </div>

        <div className='w-full flex flex-col justify-center items-start py-25 md:p-0 md:pr-50'>
          <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>Who are we?</div>
          <div className='text-[18px] leading-[25px] font-[300] Poppins'>
            We are not the typical lottery you can come across online. Our team has beliefs and values we amend to rigorously, providing you with the best chance of actually hitting the lottery while having fun.
          </div>
        </div>
      </div>

      <div>
        <div className='container_ relative flex flex-col py-50 px-25 gap-25'>
          <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>Who are we?</div>

          <div className='text-[18px] leading-[25px] font-[300] Poppins opacity-60'>
            We have only one goal on our radar - to change the online crypto lottery industry. And we will do this by providing our users with numerous opportunities to make a profit, the most significant chance in the industry of taking down the best lottery prizes and, of course, a safe place where everyone can have fun and enjoy some thrilling emotions.
          </div>

          <div className='text-[18px] leading-[25px] font-[300] Poppins opacity-60'>
            All crypto lotteries rely solely on luck, and we hate that. Players deserve so much more! Here at MYLT, we give users all the freedom they need so that they can take full ownership of their fate. You want the best chance to win big? We offer it. You want to win the new Rolex watch? Join our niche lottery for it. You don't like the prize you have won? Auction it to the other users and make a profit to get new tickets before the draw or simply keep your profit
          </div>

          <div className='text-[18px] leading-[25px] font-[300] Poppins opacity-60'>
            Luck isn't the driving force of our lives anymore. So join our passionate community, and let's change the crypto lottery industry forever, all while profiting and having fun together!
          </div>

          <Image src={lineEffect} alt="line-effect"
            className='absolute right-0 -top-[90%] w-[50%] hidden lg:flex'
          />
        </div>
      </div>
    </>
  )
}