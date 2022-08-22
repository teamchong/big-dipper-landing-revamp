import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Box)(({ theme }) => ({
  background: 'url(../../../public/images/background/footer.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 100%',
  backgroundSize: '100vw auto',
  minHeight: '100vh',
  display: 'flex',
  flexFlow: 'column nowrap',
  [theme.breakpoints.up('md')]: {
    backgroundSize: `${theme.breakpoints.limit}px auto`,
  },
}));

export const StyledContent = styled('div')({
  flex: '1 0 100%',
});

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  ...theme.mixins.gradientBackground,
}));
