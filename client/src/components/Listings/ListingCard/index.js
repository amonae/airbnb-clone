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

export default function ListingCard() {
  return (
    <ListingCardContainer>
      <ListingCardImg />
        <ListingCardInfo>
          <ListingCardTitle><span style={{cursor: 'pointer'}}>Lorem Ipsum Solum Dolet This Is Text</span></ListingCardTitle>
          <ListingCardPrice>$45 /night</ListingCardPrice>
          <ListingCardBadges>
            <ListingCardRatingBadge>4.5<StarIcon /></ListingCardRatingBadge>
            <ListingCardSaveBadge><HeartIcon />Save</ListingCardSaveBadge>
          </ListingCardBadges>
        </ListingCardInfo>
    </ListingCardContainer>
  )
}