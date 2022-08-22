import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledMenubarDesktop = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  height: '79px',
  padding: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    justifyContent: 'space-between',
  },
}));
