import styled from '@emotion/styled';
import React from 'react';

const ANIMATION_DURATION_MILLISECONDS = 450;

export const FadingBox = ({ shouldShow, children }) => (
  <Box className={`${shouldShow ? 'fade-in' : 'fade-out'}`}>{children}</Box>
);

const Box = styled.div`
  &.fade-in {
    pointer-events: all;
    transform: scale(1);
    opacity: 1;
  }

  &.fade-out {
    pointer-events: none;
    transform: scale(0.7);
    opacity: 0;
  }

  transition: all ${ANIMATION_DURATION_MILLISECONDS}ms ease-out;
  background: #000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-content: center;
  justify-content: center;
`;
