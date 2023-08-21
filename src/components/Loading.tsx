import { CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <Typography
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        fontSize: '4rem',
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress />
      Loading...
    </Typography>
  );
};

export default Loading;
