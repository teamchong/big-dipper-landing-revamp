import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

/* Creating a Box component with the styles applied. */
export const StyledBox = styled(Box)({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});

/* Creating a Typography component with the styles applied. */
export const StyledTypography1 = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  textShadow: '2px 2px rgba(0,0,0,0.2)',
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

/* Creating a Typography component with the styles applied. */
export const StyledTypography2 = styled(Typography)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  textShadow: '2px 2px rgba(0,0,0,0.2)',
  fontSize: '0.8rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));
