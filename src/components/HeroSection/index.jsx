import React, { useState } from 'react';

import { Button } from '../ButtonElement';
import Video from '../../videos/video.mp4';

import {
  HeroBg,
  HeroContainer,
  VideoBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id='home'>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and receive $250 in creadit towards
            your next payment.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              primary
              dark
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to='signup'>
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
