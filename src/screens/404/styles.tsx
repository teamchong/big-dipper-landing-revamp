import { styled } from '@mui/material/styles';
import Layout from '@src/components/layout';

export const StyledLayout = styled(Layout)(({ theme }) => ({
  '& > div > div:nth-of-type(2)': {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  '& img': {
    marginTop: '-20px !important',
    marginBottom: '-100px !important',
  },
  '& h3': {
    fontSize: '1.2rem',
  },
  '& h4': {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up('md')]: {
    '& h3': {
      fontSize: '2rem',
    },
    '& h4': {
      fontSize: '1.4rem',
    },
  },
}));
