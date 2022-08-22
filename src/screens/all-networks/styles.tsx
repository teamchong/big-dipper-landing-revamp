import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SectionBox from '@src/components/section-box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

export const StyledSectionBox = styled(SectionBox)({
  padding: '0',
  overflow: 'visible',
});

export const StyledTabsBox = styled(Box)(({ theme }) => ({
  padding: `0 ${theme.spacing(1)}`,
}));
export const StyledTab = styled('a')(({ theme }) => ({
  display: 'inline-block',
  padding: theme.spacing(1),
  color: theme.palette.secondary.contrastText,
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  },
  '&.active': {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
}));

export const StyledSearchBarBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `0 ${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(3)}`,
  [theme.breakpoints.up('md')]: {
    padding: `0 0 ${theme.spacing(2)} 0`,
  },
  '& .MuiTypography-root': {
    display: 'inline-block',
    fontSize: theme.typography.h3.fontSize,
    padding: `${theme.spacing(3)} 0`,
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      display: 'block',
    },
  },
  '& > .MuiBox-root': {
    width: '100%',
    padding: `0 0 ${theme.spacing(2)} 0`,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },

    '& .MuiTypography-subtitle1': {
    },
  },
}));

export const StyledSubtitle1 = styled(Typography)(({ theme }) => ({
  fontSize: '0.8rem',
  textAlign: 'center',
  padding: `0 0 ${theme.spacing(2)} 0`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    fontSize: '0.9rem',
  },
}));

export const StyledNetworksBox = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(20)} ${theme.spacing(3)}`,
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(28)}, 1fr))`,
  justifyContent: 'space-between',
  gridGap: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    padding: `0 0 ${theme.spacing(20)} 0`,
    gridGap: theme.spacing(3),
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(32)}, 1fr))`,
  },
}));
export const StyledScrollTopBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: 'center',
}));

export const StyledFab = styled(Fab)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
  background: 'rgba(255,255,255,0.2)',
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
}));
