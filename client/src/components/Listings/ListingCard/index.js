import React from 'react';
import {
  ListingCardContainer,
  ListingCardImg,
  ListingCardInfo,
  ListingCardTitle,
  ListingCardBadges,
  ListingCardRatingBadge,
  ListingCardSaveBadge,
  ListingCardPrice,
  HeartIcon,
  StarIcon
} from './ListingCardElements'

import ListingCardCarousel from './ListingCardCarousel'

export default function ListingCard(props) {
  return (
    <ListingCardContainer>
      <ListingCardImg>
        <ListingCardCarousel />
      </ListingCardImg>
      <ListingCardInfo>
        <ListingCardTitle><span style={{cursor: 'pointer'}}>{props.title}</span></ListingCardTitle>
        <ListingCardPrice>${props.price} /night</ListingCardPrice>
        <ListingCardBadges>
          <ListingCardRatingBadge>{props.rating}<StarIcon /></ListingCardRatingBadge>
          <ListingCardSaveBadge><HeartIcon />Save</ListingCardSaveBadge>
        </ListingCardBadges>
      </ListingCardInfo>
    </ListingCardContainer>
  )
}