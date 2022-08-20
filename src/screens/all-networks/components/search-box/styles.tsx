import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import { styled, alpha } from '@mui/material';

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

export const StyledPopper = styled(Popper)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: alpha(theme.palette.background.mobileMenu, 0.9),
    borderRadius: theme.spacing(1),
    zIndex: 1,
  },
  '& .MuiListItem-root': {
    height: theme.spacing(7),
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    padding: `0 ${theme.spacing(2)}`,
    '&:hover': {
      backgroundColor: alpha(theme.palette.background.mobileMenu, 0.8),
    },
  },
  '& .MuiListItemIcon-root': {
    flex: `0 0 ${theme.spacing(3)}`,
    justifyContent: 'center',
    '& img': {
      background: theme.palette.common.white,
      borderRadius: '100%',
      padding: theme.spacing(0.2),
      border: `${theme.spacing(0.2)} solid ${theme.palette.common.white} !important`,
    },
  },
  '& .MuiListItemText-root': {
    flex: '1 1 auto',
    flexFlow: 'row wrap',
    '& .MuiTypography-subtitle1': {
      fontSize: '0.8rem',
    },
  },
}));
