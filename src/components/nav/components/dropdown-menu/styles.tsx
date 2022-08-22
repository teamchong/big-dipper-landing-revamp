import { styled } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

export const StyledModal = styled(Modal)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledMobileMenuPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.mobileMenu,
  width: '80vw',
  padding: `${theme.spacing(2)} 0`,
  borderRadius: theme.spacing(2),
  margin: 'auto',
}));
