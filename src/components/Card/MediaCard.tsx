import { Card, CardContent, CardMedia, CardProps, Divider, Typography } from '@mui/material';
import { HorizontalCenteredBox } from '../Box';

type Props = CardProps & {
  photo: string;
  slug?: string;
  title: string;
  info?: string;
  extra?: string;
  icon?: React.ElementType;
};

export function MediaCard({ photo, title, extra, info, icon, ...restProps }: Props) {
  const MediaIcon = icon as React.ElementType;

  return (
    <Card {...restProps}>
      <CardMedia
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      >
        <HorizontalCenteredBox>
          <img
            src={photo}
            loading="lazy"
            alt={title}
            style={{
              maxWidth: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </HorizontalCenteredBox>
      </CardMedia>

      <CardContent sx={{ background: '#fff' }}>
        <Typography
          mb={1}
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </Typography>
        <HorizontalCenteredBox
          sx={{
            gap: 0.4,
            justifyContent: 'flex-start',
          }}
        >
          <MediaIcon />
          {info}
        </HorizontalCenteredBox>
        <Divider />
        <Typography
          sx={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {extra}
        </Typography>
      </CardContent>
    </Card>
  );
}
