import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SvgIcon = styled(({ Icon, className, ...props }) => (
  <i className={`${className} ${Icon}`} {...props}>
    <Icon />
  </i>
))(
  ({ size, color }) => css`
    svg {
      color: ${color};
      height: ${size}px;
      width: ${size}px;
    }
  `
);
