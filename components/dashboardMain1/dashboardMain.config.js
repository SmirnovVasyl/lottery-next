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