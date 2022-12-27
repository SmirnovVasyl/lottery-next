
import Image from 'next/image'

import styles from './connectWallet.module.scss'
import { walletList } from './connectWallet.config'

export const ConnectWallet_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100">
          <h1 className="text-40 font-[700] leading-[60px] text-center md:text-55 md:leading-[60px]">
            Connect Wallet
          </h1>

          <h2 className="max-w-[90%] text-15 font-[400] leading-[120%] text-center md:text-20 md:leading-[150%] md:max-w-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris finibus magna viverra viverra fermentum.Cras eget justo vitae ex
          </h2>
        </div>
      </div>

      <div className=''>
        <div className='container_ py-50 px-10 md:py-80 md:px-100 xl:px-200'>
          <div className='grid grid-cols-1 gap-30 md:grid-cols-2 lg:grid-cols-3'>
            {walletList.map((list, key) => (
              <div key={key}
                className={`${styles.connect_item} flex flex-col items-center px-25 py-30`}
              >
                <Image src={list.img} alt="connect-wallet" className='w-100 h-100 my-10' />
                <h1 className='uppercase text-[23px] font-[700] leading-10'>{list.name}</h1>
                <h2 className='text-[13px] font-[300] leading-6 text-center'>{list.description}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}