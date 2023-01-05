import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import Particle from "../particle/particle";
import SplashImg from '../../assets/image/splash.png';

const Splash = () =>
{
  const UNIT = 9;
  const INIHEIGHT = 110;

  const [height, setHeight] = useState(INIHEIGHT);
  const [top, setTop] = useState(0);
  const [scale, setScale] = useState(1);

  const MYLT = useRef();
  const demo_canvas = useRef();
  const large_header = useRef();
  const canvas_wrapper = useRef();
  useEffect(() => { window.addEventListener("scroll", scrollControl); }, []);
  const scrollControl = () =>
  {
    if (!demo_canvas.current || !canvas_wrapper.current) return;
    let opacity = 1 - scrollY / innerHeight;
    let scale = 0.2 + 0.8 * opacity;
    let offset = parseInt(UNIT * 100 * scrollY / innerHeight);
    let newHeight = INIHEIGHT + offset;

    let canvas = demo_canvas.current;
    let video = document.querySelector("video");
    let canvasContainer = canvas_wrapper.current;

    canvas.style.opacity = opacity;
    setHeight(newHeight);
    setTop(- offset);
    setScale(scale);

    // Controls opacity of canvas container from 0.9 ~ 1
    let conOpacity = 1 - (scrollY - 0.5 * innerHeight) / (0.5 * innerHeight);
    canvasContainer.style.opacity = conOpacity;

    if (!video) return;
    // Hide canvas if the scroll is over the inner height
    if (scrollY > innerHeight)
    {
      canvasContainer.style.display = "none";
      MYLT.current.style.display = "none";
      video.style.position = "absolute";
      video.style.top = "100vh";
      if (video.paused)
      {
        video.muted = true;
        video.play();
      }
    } else
    {
      canvasContainer.style.display = "block";
      MYLT.current.style.display = "block";
      video.style.position = "fixed";
      video.style.top = 0;
      if (!video.paused) video.pause();
    }
  };

  return (
    <>
      <div ref={MYLT} className="absolute top-[calc(50vh-110px)] z-50 left-0">
        <div className="overflow-hidden flex max-w-[100vw]" style={{ height: height, marginTop: top }}>
          <Image src={SplashImg} alt="splash" className="h-[590px]" style={{ transform: `scale(${scale})` }} />
        </div>
        <div className="overflow-hidden -scale-y-100" style={{ height: height }}>
          <Image src={SplashImg} alt="splash" className="h-[590px]" style={{ transform: `scale(${scale})` }} />
        </div>
      </div>

      <div className='canvas_wrapper -z-10' ref={canvas_wrapper}>
        <div className='large_header' ref={large_header}>
          <canvas className='demo_canvas' ref={demo_canvas} />
        </div>
      </div>

      <Particle demo_canvas={demo_canvas} large_header={large_header} />
    </>
  );
};

export default Splash;
