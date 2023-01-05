import { Html, Head, Main, NextScript } from 'next/document'

export default function Document()
{
  return (
    <Html lang="en">
      <Head>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/three.js/89/three.min.js"></script>
        <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
