import { PropsWithChildren } from 'react';
import { Box } from '@mui/joy';

type Props = PropsWithChildren<{}>;

export function CardList({ children }: Props) {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 6, justifyContent: 'flex-start' }}
    >
      {children}
    </Box>
  );
}
