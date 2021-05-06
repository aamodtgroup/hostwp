import { styled, connect } from "frontity";
import React from 'react';
import Lottie from 'react-lottie-player';
import animation from "./lottie2.json";


const LottiePlayer = () => (
    <LottieDiv>
        <Lottie
        loop
        animationData={animation}
        play
        />
    </LottieDiv>
);
 
export default connect(LottiePlayer);

const LottieDiv = styled.div`
  width: 600px;
  height: auto;
  
  @media (max-width: 750px) {
    width: 100%;
    min-height: 300px;
  }
`;