
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { Menu } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { menuList } from './header.config'
import Splash from "../splash";

import Logo from '../../assets/image/logo.png'
import WalletConnect from '../../assets/image/connect-wallet/WalletConnect.png'
import Formatmatic from '../../assets/image/connect-wallet/Formatmatic.png'
import metamask from '../../assets/image/connect-wallet/metamask.png'
import Coinbase from '../../assets/image/connect-wallet/Coinbase.png'
import Phantom from '../../assets/image/connect-wallet/Phantom.png'
import Core from '../../assets/image/connect-wallet/Core.png'


export const Header = ({ animation }) =>
{
  const [anchorEl, setAnchorEl] = useState(null);
  const openStatus = Boolean(anchorEl);
  const menuOpen = (event) => { setAnchorEl(event.currentTarget); };
  const menuClose = () => { setAnchorEl(null); };

  const [anchorElWC, setWCAnchorEl] = useState(null);
  const openStatusWC = Boolean(anchorElWC);
  const WCmenuOpen = (event) => { setWCAnchorEl(event.currentTarget) }
  const WCmenuClose = () => { setWCAnchorEl(null); };

  return (
    <div className='header-container container_'>
      <div className=''>
        <Image src={Logo} alt="logo-img" className='max-w-130 md:max-w-[100%]' />
      </div>

      <div className='hidden flex-row gap-25 cursor-pointer xl:flex'>
        {menuList.map((item, key) => (
          <Link href={item.link} key={key}>
            {item.title}
          </Link>
        ))}
      </div>

      <div className='mr-0 xl:mr-20 flex items-center'>
        <div onClick={WCmenuOpen}
          className='wallet-connect-btn h-fit rounded-full whitespace-nowrap text-[13px] md:text-15 px-10 py-[8px] md:px-20 md:py-15'
        >wallet connect</div>

        <Menu
          anchorEl={anchorElWC}
          open={openStatusWC}
          onClose={WCmenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
          transformOrigin={{ vertical: 'top', horizontal: 'right', }}
          PaperProps={{
            sx: {
              mt: 1.5,
              color: 'white',
              bgcolor: '#323150',
              overflow: 'visible',
              '& .MuiAvatar-root': {
                width: 32, height: 32,
                ml: -0.5, mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block', position: 'absolute',
                top: 0, right: 14, width: 10, height: 10,
                bgcolor: '#323150', zIndex: 0,
                transform: 'translateY(-50%) rotate(45deg)',
              },
            },
          }}
        >
          <div className='w-250 flex flex-col gap-10 px-15'>
            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={metamask} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>metamask</div>
            </div>

            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={Coinbase} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>Coinbase</div>
            </div>

            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={WalletConnect} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>Wallet connect</div>
            </div>

            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={Phantom} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>Phantom</div>
            </div>

            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={Core} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>core</div>
            </div>

            <div className='flex flex-row gap-10 cursor-pointer'>
              <Image src={Formatmatic} alt="connect-wallet" className='w-30 h-30' />
              <div className='text-[18] font-[500] uppercase'>formatmatic</div>
            </div>
          </div>
        </Menu>

        <div className='flex xl:hidden justify-center items-center px-20'>
          <MenuIcon className='text-[40px] cursor-pointer' onClick={menuOpen} />

          <Menu
            anchorEl={anchorEl}
            open={openStatus}
            onClose={menuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            PaperProps={{
              sx: {
                mt: 1.5,
                color: 'white',
                bgcolor: '#323150',
                overflow: 'visible',
                '& .MuiAvatar-root': {
                  width: 32, height: 32,
                  ml: -0.5, mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block', position: 'absolute',
                  top: 0, right: 14, width: 10, height: 10,
                  bgcolor: '#323150', zIndex: 0,
                  transform: 'translateY(-50%) rotate(45deg)',
                },
              },
            }}
          >
            <div className='flex flex-col px-20'>
              {menuList.map((item, key) => (
                <Link href={item.link} key={key} className='py-5 text-left'>
                  {item.title}
                </Link>
              ))}
            </div>
          </Menu>
        </div>
      </div>

      {!!animation && (<Splash />)}
    </div>
  )
}