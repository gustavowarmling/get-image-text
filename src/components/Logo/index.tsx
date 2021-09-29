import React from 'react';
import { LogoWrapper } from './styles';

type logoProps = {
  customStyle: React.CSSProperties;
}

export function Logo({ customStyle }: logoProps) {
  return (
    <LogoWrapper 
      style={customStyle ? 
        customStyle : {}
      }
    >
      get-Image-Text()
    </LogoWrapper>
  );
};