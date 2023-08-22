import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{}>;

export function CardList({ children }: Props) {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 3.5, flexWrap: 'wrap', p: 0, m: 6, justifyContent: 'flex-start' }}
    >
      {children}
    </Box>
  );
}
