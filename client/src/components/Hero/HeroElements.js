import styled from "styled-components";
import imgBg from "background.jpg";

export const HeroContainer = styled.div``;

export const HeroBg = styled.div`
  background-image: url(${imgBg});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-position-x: -15rem;
  margin-left: 55rem;
`;

export const ContentContainer = styled.div`
  position: absolute;
  top: 22vh;
  left: 8.629rem;

  height: fit-content;
`;

export const HeroTitle = styled.h1`
  font-family: Poppins, "sans-serif";
  font-size: 7rem;
  width: 720px;
  line-height: 107.52px;
`;
