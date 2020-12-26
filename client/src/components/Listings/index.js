import React from 'react';
import {Navbar} from '../Navbar';
import {
  ListingsPageContainer,
  ListingsSection,
  MapSection,
  ListingCards
} from './ListingsElements';
import ListingCard from './ListingCard';

export default function Listings() {
  
  return (
    <>
    <Navbar />
    <ListingsPageContainer>
      <ListingsSection>
        <ListingCards>
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </ListingCards>
      </ListingsSection>
      <MapSection>
      </MapSection>
    </ListingsPageContainer>
    </>
  )
}