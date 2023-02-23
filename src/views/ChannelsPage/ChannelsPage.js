import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ChannelsNav } from '../../components/ChannelsNav/ChannelsNav';
import { ChannelVideo } from '../../components/ChannelVideo/ChannelVideo';
import { FadingBox } from '../../components/FadingBox/FadingBox';
import { TRACKING_EVENTS } from '../../config';
import { trackChannelEvent } from '../../utils';

export const ChannelsPage = () => {
  const [focusedChannel, setFocusedChannel] = useState(null);

  const onSingleChannelChosen = async channelObject => {
    if (!channelObject) {
      trackChannelEvent(TRACKING_EVENTS.CLOSE_CHANNEL);
      setFocusedChannel(null);
      return;
    }

    if (channelObject.prefetch) {
      const isPrefetchSuccessful = await channelObject.prefetch();

      if (!isPrefetchSuccessful) {
        // eslint-disable-next-line no-alert
        alert('Failed streaming channel, please try again');
        return;
      }
    }

    trackChannelEvent(TRACKING_EVENTS.OPEN_CHANNEL, channelObject.name);
    setFocusedChannel(channelObject);
  };

  const addChannel = newChannel => {
    onSingleChannelChosen(newChannel);
  };

  const onCloseChannel = () => {
    onSingleChannelChosen(null);
  };

  return (
    <ChannelsPageWrap>
      <ChannelsNav onChannelClick={addChannel} />
      <FadingBox shouldShow={Boolean(focusedChannel)}>
        {focusedChannel && (
          <ChannelVideo
            onCloseClick={() => onCloseChannel(focusedChannel.name)}
            sourceUrl={focusedChannel.url}
            type={focusedChannel.type}
          />
        )}
      </FadingBox>
    </ChannelsPageWrap>
  );
};

const ChannelsPageWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
