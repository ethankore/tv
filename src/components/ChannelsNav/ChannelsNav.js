import styled from '@emotion/styled';
import React from 'react';
import { channels } from '../../config';

export const ChannelsNav = ({ onChannelClick }) => (
  <ChannelsWrap>
    {channels.map(channel => (
      <ChannelButton
        className="chan-button"
        key={channel.name}
        onClick={() => onChannelClick(channel)}
      >
        {`${channel.name} `}
      </ChannelButton>
    ))}
  </ChannelsWrap>
);

export const ChannelsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ChannelButton = styled.button`
  font-size: 22px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  cursor: pointer;
  background: #ff2f2f;
  color: #fff;
  font-family: arial;
  border-radius: 10px;
  border: 0;

  &:active {
    box-shadow: inset 0px 0px 6px #000;
  }
`;
