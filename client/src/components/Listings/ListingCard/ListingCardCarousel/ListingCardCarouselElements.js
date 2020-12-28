import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';

export const ListingCardCarousel = styled(Carousel)`
  width: 100%;
  height: 100%;

  .carousel-item {
    transition: transform .4s ease-in-out;
  }
  .carousel-indicators {
    margin-bottom: 7px;
  }

  .carousel-indicators > li {
    border-radius: 50%;
    width: 6px;
    height: 6px;
  }
`

export const NextBtn = styled.div``

export const PrevBtn = styled.div``
