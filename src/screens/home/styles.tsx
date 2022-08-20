import { keyframes, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SectionLimit from '@components/section-limit';
import SectionBox from '@components/section-box';
import Layout from '@components/layout';

/* A styled component. */
export const StyledLayout = styled(Layout)(({ theme }) => ({
  backgroundImage:
    'radial-gradient(300vw 100vh at 50% 50vh, rgba(212,112,151,0), #30177d), url(/images/background/back.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 0',
  [theme.breakpoints.up('md')]: {
    backgroundImage:
      'radial-gradient(512px 512px at 50% 300px, rgba(212,112,151,0), #30177d), url(/images/background/back.png)',
  },
}));

/* Creating a styled component. */
export const StyledSectionBox = styled(SectionBox)({
  padding: '0',
  overflow: 'visible',
});

/* Creating a styled component. */
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
    padding: `0 ${theme.spacing(3)}`,
    [theme.breakpoints.up('md')]: {
      padding: 0,
    },
    '& .searchBar': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `0 0 ${theme.spacing(2)} 0`,
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
    padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(12)}, 1fr))`,
    justifyContent: 'space-between',
    gridGap: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: 0,
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

/* Creating a styled component. */
export const StyledImageBox = styled(Box)(({ theme }) => ({
  transform: 'scale(1)',
  mixBlendMode: 'screen',
  padding: `0 ${theme.spacing(5)}`,
  animation: `${breathing} 3s infinite ease`,
}));
