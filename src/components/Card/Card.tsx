import {
  Card as CardMui,
  CardCover,
  CardContent,
  Typography,
  CardOverflow,
  Divider,
} from '@mui/joy';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { CardType } from './types';

type Props = CardType;

export function Card({ photo, slug, title, extra, info, minHeight = 160, width = 200 }: Props) {
  return (
    <CardMui sx={{ minHeight, width }}>
      <CardCover>
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
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff" mb={1}>
          {title}
        </Typography>
        <Typography startDecorator={<LocationOnRoundedIcon />} textColor="neutral.300">
          {slug}
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            {info}
          </Typography>
          <Divider orientation="vertical" />
          <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
            {extra}
          </Typography>
        </CardContent>
      </CardOverflow>
    </CardMui>
  );
}
