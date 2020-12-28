import React from 'react';
import {ListingCardCarousel as Carousel} from './ListingCardCarouselElements';


export default function ListingCardCarousel() {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x400/000/fff"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x400/000/fff"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://dummyimage.com/600x400/000/fff"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}