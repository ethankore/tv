import styled from '@emotion/styled';
import React from 'react';
import { ReactComponent as Close } from '../../icons/Close.svg';
import { SvgIcon } from '../SvgIcon/SvgIcon';

export const CloseButton = ({ color, onClick }) => (
  <Button type="button">
    <SvgIcon Icon={Close} color={color} onClick={onClick} />
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
