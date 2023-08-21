import { Box, IconButton } from '@mui/material';
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
        padding: '2rem',
        height: '100vh',
        width: detail ? drawerWidth : 0,
        right: detail ? 0 : -drawerWidth,
        backgroundColor: 'background.paper',
        transition: 'all 0.3s ease',
      }}
    >
      <IconButton onClick={onClickClose} sx={{ position: 'absolute', top: 16, right: 16 }}>
        <CloseIcon />
      </IconButton>

      {/* // TODO: */}
      {detail ? 'DrawerContent' : null}
    </Box>
  );
}
