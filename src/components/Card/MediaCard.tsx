import { Card, CardContent, CardMedia, CardProps, Divider, Typography } from '@mui/material';
import { HorizontalCenteredBox } from '../Box';

type Props = CardProps & {
  photo: string;
  slug: string;
  title: string;
  info?: string;
  extra?: string;
};

export function MediaCard({ photo, slug, title, extra, info, ...restProps }: Props) {
  return (
    <Card {...restProps}>
      <CardMedia
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      >
        <HorizontalCenteredBox>
          <img src={photo} loading="lazy" alt={title} />
        </HorizontalCenteredBox>
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
