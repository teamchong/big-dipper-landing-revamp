import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';

export const StyledSubmenuContainerBox = styled(Box)(({ theme }) => ({
  '.desktop-menu &': {
    position: 'absolute',
    top: '100%',
    width: '100%',
    marginTop: theme.spacing(2),
    background: theme.palette.background.desktopMenu,
    borderRadius: theme.spacing(2),
    zIndex: 10,
    '& .MuiButtonBase-root': {
      borderRadius: 0,
      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    },
    '& .MuiButtonBase-root:first-of-type': {
      borderTopLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
    },
    '& .MuiButtonBase-root:last-of-type': {
      borderBottomLeftRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
    },
  },
}));

export const StyledSubmenuBox = styled(Box)({
  '.desktop-menu &': {
    display: 'inline-flex',
    position: 'relative',
  },
});

export const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  textAlign: 'left',
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
  '&.MuiListItem-gutters': {
    padding: theme.spacing(2, 2.5),
  },
  '& .MuiListItemText-root': {
    color: theme.palette.common.white,
    fontWeight: 900,
  },
  '&.active': {
    background: theme.palette.background.activeMenuItem,
  },
  '&.submenu': {
    background: theme.palette.background.desktopMenu,
  },
}));
