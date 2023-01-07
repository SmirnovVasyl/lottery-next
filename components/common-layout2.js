import Head from 'next/head'
import { Header2 } from './header/header2'
import { Footer2 } from './footer/footer2'

export const CommonLayout2 = ({ children, animation }) =>
{
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      </Head>

      <main className='lottery-layout-wrapper'>
        <section className='header-section'><Header2 animation={animation} /></section>
        <section className={`content-section ${!!animation ? 'mt-[200vh]' : 'mt-60'}`}>{children}</section>
        <section className='footer-section'><Footer2 /></section>
      </main>
    </>
  )
}