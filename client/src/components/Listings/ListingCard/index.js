import React from 'react';
import {
  ListingCardContainer,
  ListingCardImg,
  ListingCardInfo,
  ListingCardTitle,
  ListingCardBadges,
  ListingCardRatingBadge,
  ListingCardSaveBadge,
  ListingCardPrice
} from './ListingCardElements'

export default function ListingCard() {
  return (
    <ListingCardContainer>
      <ListingCardImg />
        <ListingCardInfo>
          <ListingCardTitle>Lorem Ipsum Solum Dolet This Is Text</ListingCardTitle>
          <ListingCardPrice>$45 /night</ListingCardPrice>
          <ListingCardBadges>
            <ListingCardRatingBadge>4.5</ListingCardRatingBadge>
            <ListingCardSaveBadge />
          </ListingCardBadges>
        </ListingCardInfo>
    </ListingCardContainer>
  )
}