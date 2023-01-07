import creator1 from '../../assets/image/creator/creator1.png'
import creator2 from '../../assets/image/creator/creator2.png'
import creator3 from '../../assets/image/creator/creator3.png'
import creator4 from '../../assets/image/creator/creator4.png'
import creator5 from '../../assets/image/creator/creator5.png'
import creator6 from '../../assets/image/creator/creator6.png'
import creator7 from '../../assets/image/creator/creator7.png'

export const slickSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: -1000,
  cssEase: "linear",
  className: 'slick-container',

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 4,
      }
    }, {
      breakpoint: 1024,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 3,
      }
    }, {
      breakpoint: 640,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 2,
      }
    }, {
      breakpoint: 400,
      settings: {
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 1,
      }
    },
  ]
}

export const creatorLists = [
  { name: '@Itsjames45', user_img: creator1 },
  { name: '@Itsjames45', user_img: creator2 },
  { name: '@Itsjames45', user_img: creator3 },
  { name: '@Itsjames45', user_img: creator7 },
  { name: '@Itsjames45', user_img: creator4 },
  { name: '@Itsjames45', user_img: creator5 },
  { name: '@Itsjames45', user_img: creator6 },
  { name: '@Itsjames45', user_img: creator7 },
]