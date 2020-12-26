import React from 'react';
import styled from 'styled-components';

export const ListingsPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
`

export const ListingsSection = styled.section`
  height: 100vh;
  width: 60vw;
  background-color: white;
  padding: 20px 40px;
  
`
export const MapSection = styled.div`
  height: 100vh;
  width: 40vw;
  background-color: lightgrey;
  position: sticky;
  padding-top: 80px;
  top: 0;
`

export const ListingCards = styled.div`
  margin-top: 3rem;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  width: fit-content;
  height: fit-content;
`



