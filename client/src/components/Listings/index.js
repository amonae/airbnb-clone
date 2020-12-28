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
          <ListingCard title="Lorem Ipsum Solum Dolet This Is Text" price="45" rating="4.5"/>
          <ListingCard title="This Is Another Card" price="22" rating="4.3" />
          <ListingCard title="Lorem Ipsum Solum Dolet This Is Text This Is Text" />
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