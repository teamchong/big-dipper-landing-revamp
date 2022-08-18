import { keyframes, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { SectionLimit } from '@components';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '&.logo': {
    width: '100%',
    textAlign: 'center',
    maxWidth: '100%',
    position: 'relative',
    background: 'url("/images/background/stars.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '95% auto',
    backgroundPosition: '50% 50%',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '100% auto',
    },
    '& .slider': {
      position: 'absolute',
      zIndex: 1,
      left: 50,
      right: 50,
      top: 0,
      bottom: 0,
      '& .slick-slider': {
        height: '85%',
      },
      '& .slick-list': {
        height: '100%',
      },
      '& .slick-track': {
        height: '100%',
      },
      '& .slick-slide': {
        position: 'relative',
      },
      '& .slick-arrow': {
        transform: 'scale(1.5)',
        textShadow: '2px 2px rgba(0,0,0,0.1)',
      },
      '& .slick-dots li button:before': {
        color: theme.palette.secondary.contrastText,
        opacity: 0.95,
        transform: 'scale(1.2)',
        textShadow: '1px 1px rgba(0,0,0,0.1)',
      },
      '& .slick-dots li.slick-active button:before': {
        color: 'red',
      },
    },
  },
  '&.content': {
    padding: `0 ${theme.spacing(4)}`,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(10)}`,
    },
    '& .searchBar': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .MuiTypography-root': {
        display: 'inline-block',
        fontSize: theme.typography.h2.fontSize,
        padding: `${theme.spacing(3)} 0`,
        textAlign: 'center',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.h3.fontSize,
          width: 'auto',
          display: 'block',
        },
      },
    },
  },
  '&.networks': {
    padding: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(12)}, 1fr))`,
    justifyContent: 'space-between',
    gridGap: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(10)}`,
      gridGap: theme.spacing(3),
    },
  },
  '&.scrollToTop': {
    padding: theme.spacing(6),
    textAlign: 'center',
    '& .MuiFab-root': {
      width: theme.spacing(4),
      height: theme.spacing(4),
      background: 'rgba(255,255,255,0.2)',
      border: `1px solid ${theme.palette.text.primary}`,
      color: theme.palette.text.primary,
    },
  },
}));

const breathing = keyframes`
50% {
  transform: scale(0.98);
}
`;

export const StyledImageBox = styled(Box)(({ theme }) => ({
  transform: 'scale(1)',
  mixBlendMode: 'screen',
  padding: `0 ${theme.spacing(5)}`,
  animation: `${breathing} 3s infinite ease`,
}));
