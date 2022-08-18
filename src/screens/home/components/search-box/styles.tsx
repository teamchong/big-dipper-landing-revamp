import {
  Autocomplete, Popper, styled, alpha,
} from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(30),
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
    backgroundColor: alpha(theme.palette.background.mobileMenu, 0.95),
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
    background: '#fff',
    borderRadius: '100%',
  },
}));
