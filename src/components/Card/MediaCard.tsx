import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';

type Props = {
  photo: string;
  slug: string;
  title: string;
  info?: string;
  extra?: string;
  minHeight?: number;
  width?: number;
};

export function MediaCard({
  photo,
  slug,
  title,
  extra,
  info,
  minHeight = 160,
  width = 200,
}: Props) {
  return (
    <Card sx={{ minHeight, width }}>
      <CardMedia
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      >
        <img
          src={photo}
          srcSet={photo}
          loading="lazy"
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectPosition: 'center',
          }}
        />
      </CardMedia>
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography mb={1}>{title}</Typography>
        <Typography>{slug}</Typography>

        <Divider />

        <Typography>{info}</Typography>
        <Divider orientation="vertical" />
        <Typography>{extra}</Typography>
      </CardContent>
    </Card>
  );
}
