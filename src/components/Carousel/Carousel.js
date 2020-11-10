import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Carousel.css';

import Image1 from '../images/LoginImg/loginEntryPointPost.webp'
import Image2 from '../images/LoginImg/loginEntryPointFavorite.webp'
import Image3 from '../images/LoginImg/loginEntryPointChat.webp'

const items = [
  {
    id: 1,
    altText: 'Save all your favorite items in one place',
    caption: 'Save all your favorite items in one place',
    src : Image3
  },
  {
    id: 2,
    altText: 'Contact and close deals faster',
    caption: 'Contact and close deals faster',
    src : Image2
  },
  {
    id: 3,
    altText: 'Help make OLX safer place to buy and sell',
    caption: 'Help make OLX safer place to buy and sell',
    src : Image1,
  }
];
const LoginCarousel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item, i) => {
      return (
        <CarouselItem
          className='CarouselItem'
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={i}
        >
          <img src={item.src} alt={item.altText} className='CarouselItemImg'/>
          <CarouselCaption className='CarouselCaption' captionText={item.caption}  />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators className='CarouselIndicators' items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
      </Carousel>
    );
  }
  
  export default LoginCarousel;