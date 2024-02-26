import styled from '@emotion/styled';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import close from './close.svg?react';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CloseButton = ({ color, onClick }) => (
  <Button type="button">
    <SvgIcon Icon={close} color={color} onClick={onClick} />
  </Button>
);

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;

  && svg {
    width: 25px;
    height: 25px;
  }
`;
