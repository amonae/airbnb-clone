import React, { useState } from 'react';
import { Navbar } from 'components/Navbar';
import {
  HeroContainer,
  HeroBg,
  WhiteHalf,
  ImageHalf,
  ContentContainer,
  HeroTitle
} from 'components/Hero/HeroElements.js';

import imgBg from 'background.jpg';
import { Searchbar } from 'components/Searchbar';

export default function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <ContentContainer>
        <HeroTitle>Find Your Next Getaway 🛫</HeroTitle>
        <Searchbar />
      </ContentContainer>
      <HeroBg />
    </HeroContainer>
  );
}
