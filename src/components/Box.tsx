import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { defaultPropsComponentFactory } from '@/utils';

export interface CenteredBoxProps extends BoxProps {}

export const HorizontalCenteredBox: React.FC<CenteredBoxProps> = defaultPropsComponentFactory(
  Box,
  {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  'HorizontalCenteredBox'
);

export const VerticalCenteredBox: React.FC<CenteredBoxProps> = defaultPropsComponentFactory(
  HorizontalCenteredBox,
  {
    flexDirection: 'column',
  },
  'VerticalCenteredBox'
);

export const CenteredBox: React.FC<CenteredBoxProps> = defaultPropsComponentFactory(
  VerticalCenteredBox,
  {
    height: '100%',
  },
  'CenteredBox'
);
