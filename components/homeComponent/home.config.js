import slickImage1 from '../../assets/image/creator/creator_slick1.png'

export const slickSettings = {
  dots: false,
  infinite: true,
  autoplay: true,
  pauseOnHover: false,
  speed: 5000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 5000,
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
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
  { name: '@Itsjames45', user_img: slickImage1 },
]