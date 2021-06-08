import { Slideshow } from '@material-ui/icons';
import React from 'react'
// import { Slider } from 'react-mdl';
import styled, { css } from 'styled-components/macro'
import GlobalStyle from '../globalStyles';
import { Button } from './Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";

const HeroSection = styled.section `
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden; 
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  with: 100%;
  height: 100%
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
      content: '';
      position: absolute;
      z-index: 2;
      with: 100%;
      height: 100vh;
      bottom: 0vh;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(
          0deg, 
          rgba(0,0,0,0.2) 0%, 
          rgba(0,0,0,0.2) 50%, 
          rgba(0,0,0,0.6) 100% 
          );
       }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  with: 100vh;
  height: 100vh;
  object-fit: cover;
`
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
`
const Arrow = styled(IoIosArrowRoundForward)``;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;

`

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  transition: 0.3s;

  &:hover {
      background: #cd853f;
      transform: scale(1.05);
  }

`

const PrevArrow = styled(IoArrowBack)`
  ${arrowButtons}
`

const NextArrow = styled(IoArrowForwardOutline)`
  ${arrowButtons}
`

const Hero = ({ slides }) => {
    return (
        <div>
            {/* <GlobalStyle/> */}
            <HeroSection>
             <HeroWrapper>
               {slides.map((slide, index) => {
                   return (
                    <HeroSlide key={index} >
                     <HeroSlider>
                         <HeroImage src={slide.image} alt={slide.alt} />
                             <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} primary="true"
                                css={`max-width: 160px; `}
                                >
                                    {slide.label}
                                    <Arrow />
                                </Button>
                             </HeroContent>
                     </HeroSlider>
                  </HeroSlide>
                 )
               })}
               <SliderButtons>
                   <PrevArrow />
                   <NextArrow />
                   {/* <IoArrowBack />
                   <IoArrowForwardOutline /> */}
               </SliderButtons>
            </HeroWrapper>
            </HeroSection>
        </div>
    )
}

export default Hero
