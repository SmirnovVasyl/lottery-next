import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SampleNextArrow = ({ onClick }) =>
{
  return (
    <div onClick={onClick} className='h-full flex absolute right-0 top-0 items-center cursor-pointer z-10'>
      <ArrowForwardIosIcon />
    </div>
  );
}

const SamplePrevArrow = ({ onClick }) =>
{
  return (
    <div onClick={onClick} className='h-full flex absolute left-0 top-0 items-center cursor-pointer z-10'>
      <ArrowBackIosNewIcon />
    </div>
  );
}

export const slickSettings = {
  className: "dashboardMain-slick",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 500,

  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export const progressConfig = {
  fontColor: "#FFC55F",
  fontSize: "20px",
  fontWeight: 700,
  size: '100%',
  stroke: 10,
  strokeBottom: 5,
  speed: 60,
  cut: 0,
  rotation: -90,
  opacity: 10,
  fill: "#00897B",
  unit: "%",
  textPosition: "0.35em",
  animationOff: false,
  strokeDasharray: "10,1",
  inverse: false,
  round: false,
  number: true,
  linearGradient: ["#FFC55F", "#FB3951", "#E25A64"]
};