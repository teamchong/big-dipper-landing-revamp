import { styled } from '@mui/material/styles';

export const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  ...theme.mixins.gradientBackground,
  '& .footerBox': {
    background: 'url(/images/background/footer.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 100%',
    backgroundSize: '100vw auto',
    [theme.breakpoints.up('md')]: {
      backgroundSize: `${theme.breakpoints.limit}px auto`,
    },
  },
}));

export const StyledDiv = styled('div')({
  flex: 1,
});
