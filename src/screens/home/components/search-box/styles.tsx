import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import { styled, alpha } from '@mui/material';

/* A styled component. */
export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(28),
    minWidth: theme.spacing(28),
  },
  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    padding: `${theme.spacing(0)} ${theme.spacing(0)} !important`,
  },
}));

/* A styled component. */
export const StyledPopper = styled(Popper)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: alpha(theme.palette.background.mobileMenu, 0.9),
    borderRadius: theme.spacing(1),
    zIndex: 1,
  },
  '& .MuiMenuItem-root': {
    height: theme.spacing(4),
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: theme.spacing(1),
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: alpha(theme.palette.background.mobileMenu, 0.8),
    },
  },
  '& img': {
    background: theme.palette.common.white,
    borderRadius: '100%',
    padding: theme.spacing(0.2),
    border: `${theme.spacing(0.2)} solid ${theme.palette.common.white} !important`,
  },
}));
