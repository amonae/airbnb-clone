import styled from 'styled-components';
import {MdFavoriteBorder} from 'react-icons/md';
import {AiFillStar} from 'react-icons/ai';


export const ListingCardContainer = styled.div`
  width: 255px;
  background-color: white;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 18px;
  height: 300px;
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
  background-color: white;
  height: 50%;
  width: 100%;
  top: 50%;
  padding: 20px;
  position: relative;
`

export const ListingCardTitle = styled.div`
  font-size: 1rem;
  text-align: left;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #404040;
  position: absolute;
  padding-left: inherit;
  padding-right: inherit;
  top: 15%;
  right: 0;
  left: 0;
`

export const ListingCardPrice = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(0,0,0,0.3);
  position: absolute;
  top: 48%;
`

export const ListingCardBadges = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  padding: inherit;
  right: 0;
  left: 0;
  bottom: 0;
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
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const ListingCardSaveBadge = styled.div`
  width: 59px;
  height: 23px;
  font-family: 'Roboto', sans-serif;
  border-radius: 7.9px;
  color: grey;
  background-color: transparent;
  border: 1px solid rgba(0,0,0,0.18);
  padding: 0px 10px 0 6px;
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const HeartIcon = styled(MdFavoriteBorder)`
  font-size: 0.9rem;
  color: grey;
  font-weight: 800;
`

export const StarIcon = styled(AiFillStar)`
  font-size: 1rem;
  color: white;
`


