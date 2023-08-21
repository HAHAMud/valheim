import { Box, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStore, useStoreActions } from '@/store';

const drawerWidth = 320;

export function DetailDrawer() {
  const detail = useStore((state) => state.bear);
  const { removeBear } = useStoreActions();

  const onClickClose = () => {
    removeBear();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: detail ? drawerWidth : 0,
        right: detail ? 0 : -drawerWidth,
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease',
      }}
    >
      <Button startIcon={<CloseIcon />} onClick={onClickClose} />
      {detail ? 'DrawerContent' : null}
    </Box>
  );
}
