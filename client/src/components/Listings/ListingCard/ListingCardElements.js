import styled from 'styled-components';

export const ListingCardContainer = styled.div`
  width: 255px;
  background-color: white;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 18px;
  height: 300px;
  /* margin-right: 1rem; */
  margin-bottom: 1.5rem;
  box-shadow: 2.24px 3.36px 13.44px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  position: relative;

  &:not(:nth-child(3n+3)) {
    margin-right: 1.5rem;
  }
`

export const ListingCardImg = styled.div`
  position: absolute;
  top: 0;
  height: 50%;
  width: 100%;
  background-color: lightgrey;
`

export const ListingCardInfo = styled.div`
  position: absolute;
  background-color: white;
  height: 50%;
  width: 100%;
  top: 50%;
  padding: 20px;
`

export const ListingCardTitle = styled.div`
  font-size: 1rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #404040;
  margin-bottom: 1rem;
`

export const ListingCardPrice = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 11.81px;
  margin-bottom: 1.2rem;
  color: rgba(0,0,0,0.3);
`

export const ListingCardBadges = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ListingCardRatingBadge = styled.div`
  width: 55px;
  height: 25px;
  border-radius: 7.7px;
  background-color: #FEBB38;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px 10px;
`

export const ListingCardSaveBadge = styled.div`
  width: 59px;
  height: 23px;
  border-radius: 7.7px;
  background-color: transparent;
  border: 1px solid rgba(0,0,0,0.2);
`