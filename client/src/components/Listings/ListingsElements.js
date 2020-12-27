import React from 'react';
import styled from 'styled-components';

export const ListingsPageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
`

export const ListingsSection = styled.section`
  height: calc(100vh - 80px);
  width: 60vw;
  background-color: white;
  padding: 20px 40px;
  
`
export const MapSection = styled.div`
  height: 100vh;
  width: 40vw;
  background-color: lightgrey;
  /* position: sticky; */
  position: absolute;
  display: block;
  padding-top: 80px;
  left: auto;
  right: 0;
  bottom: 0;
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



