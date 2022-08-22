import Autocomplete from '@mui/material/Autocomplete';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: theme.spacing(40),
    minWidth: theme.spacing(40),
  },
  '& .MuiInputBase-root': {
    borderRadius: theme.spacing(2),
    paddingRight: `${theme.spacing(2)} !important`,
  },
}));

export const StyledPopper = styled(Popper)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: alpha(theme.palette.background.mobileMenu, 0.9),
    borderRadius: theme.spacing(1),
    zIndex: 1,
  },
}));

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  height: theme.spacing(7),
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  padding: `0 ${theme.spacing(2)}`,
  marginTop: theme.spacing(1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.background.mobileMenu, 0.8),
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  flex: `0 0 ${theme.spacing(3)}`,
  justifyContent: 'center',
  '& img': {
    background: theme.palette.common.white,
    borderRadius: '100%',
    padding: theme.spacing(0.2),
    border: `${theme.spacing(0.2)} solid ${theme.palette.common.white} !important`,
  },
}));

export const StyledListItemText = styled(ListItemText)({
  flex: '1 1 auto',
  flexFlow: 'row wrap',
});

export const StyledSubtitle1 = styled(Typography)({
  fontSize: '0.8rem',
});
