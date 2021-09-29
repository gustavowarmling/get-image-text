import React from 'react';
import Lottie from 'react-lottie';
import loadingLottie from '../../assets/lotties/loading.json'

const defaultLottieOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

export function Loading () {
  return (
    <Lottie 
      options={defaultLottieOptions}
      height={400}
      width={400}
      isClickToPauseDisabled={true}
    />
  )
}