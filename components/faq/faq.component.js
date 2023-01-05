import { useState } from 'react';
import FadeIn from 'react-fade-in';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { fapInfomation } from './faq.config'

export const FAQ_ = () =>
{
  return (
    <>
      <div className="bg-[#ffffff0a] backdrop-blur-[5.5px]">
        <div className="container_ flex flex-col justify-center items-center py-50 md:py-100">
          <h1 className="max-w-550 text-30 font-[700] leading-[35px] text-center md:text-45 md:leading-[50px]">
            <FadeIn delay={300}>
              frequently asked questions
            </FadeIn>
          </h1>
        </div>
      </div>

      <div className='container_ flex flex-col justify-center items-start py-50 px-20 gap-30 md:gap-40'>
        {fapInfomation.map((item, key) => (<FaqItem item={item} key={key} />))}
      </div>
    </>
  )
}

const FaqItem = ({ item }) =>
{
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className='flex flex-col w-full gap-20 md:gap-30 p-20 md:p-30 bg-[#ffffff0a] backdrop-blur-[5.5px] select-none'>
      <FadeIn delay={300}>
        <div className='flex felx-row justify-between cursor-pointer' onClick={() => { setShowAnswer(!showAnswer); }}>
          <h1 className='text-20 font-[600] leading-7'>{item.question}</h1>
          {!!showAnswer ? <RemoveIcon /> : <AddIcon />}
        </div>
      </FadeIn>

      {!!showAnswer && (
        <FadeIn delay={300}>
          <div className='text-15 leading-[150%] font-[400] Poppins'>{item.answer}</div>
        </FadeIn>
      )}
    </div>
  )
}