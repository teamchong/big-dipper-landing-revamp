import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BDLogo from '@assets/big-dipper-red.svg';
import SectionLimit from '../section-limit';
import HamburgerIcon from './components/hamburger-icon';

export const StyledMenuBar = styled(Box)(({ theme }) => ({
  display: 'none',
  width: 'auto',
  justifyContent: 'right',
  [theme.breakpoints.up('md')]: {
    display: 'inline-flex',
  },
  '& > .MuiList-root > .MuiListItemButton-root:first-of-type': {
    display: 'none !important',
  },
  '& .MuiList-root': {
    display: 'flex',
  },
  '& .MuiButtonBase-root': {
    padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
    borderRadius: theme.spacing(3),
  },
  '& .submenu, & .active': {
    background: 'transparent none !important',
  },
  '& .active.submenu': {
    background: `${theme.palette.background.activeMenuItem} !important`,
  },
}));

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  '& > button': {
    height: '60px',
    position: 'absolute',
    padding: theme.spacing(5),
    zIndex: 1,
  },
}));

export const StyledDBLogo = styled(BDLogo)(({ theme }) => ({
  height: '28px',
  display: 'block',
  [theme.breakpoints.up('md')]: {
    height: '36px',
    margin: theme.spacing(1),
  },
}));

export const StyledDesktopMenuBox = styled(Box)(({ theme }) => ({
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

export const StyledHamburgerIcon = styled(HamburgerIcon)(({ theme }) => ({
  zIndex: 2,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
