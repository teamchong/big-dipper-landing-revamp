import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { alpha } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

export const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.mixins.button,
  padding: theme.spacing(1, 3),
}));

export const StyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(1),
  '& .MuiList-padding': {
    padding: 0,
  },
  '& .MuiMenu-paper': {
    background: alpha(theme.palette.background.mobileMenu, 0.7),
    backdropFilter: 'blur(24px)',
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  justifyContent: 'center',
  color: theme.palette.common.white,
  '&.active': {
    ...theme.mixins.button,
    borderRadius: 0,
  },
}));
