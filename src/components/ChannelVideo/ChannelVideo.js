import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import { useHls } from '../../hooks/useHls';
import { CloseButton } from '../CloseButton/CloseButton';

export const ChannelVideo = ({ sourceUrl, onCloseClick = () => {}, type }) => {
  const videoRef = useRef(null);

  const { isReady } = useHls(videoRef, sourceUrl);

  useEffect(() => {
    if (isReady) {
      videoRef.current.play();
      videoRef.current.focus();
    }
  }, [isReady]);

  const onKeyDown = e => {
    if (e.key === 'Escape') {
      onCloseClick();
    }
  };

  return (
    <Wrapper onKeyDown={onKeyDown}>
      <TitleBar>
        <CloseButton onClick={onCloseClick} color="#f00">Lol</CloseButton>
      </TitleBar>

      {/* eslint-disable-next-line max-len */}
      {type === 'iframe' ? <iframe title="video" width="100%" height="100%" src={sourceUrl} /> : <Video resizable controls ref={videoRef} src={sourceUrl} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const TitleBar = styled.div`
  height: 30px;
`;

const Video = styled.video`
  width: 100%;
  height: calc(100% - 30px);
`;
