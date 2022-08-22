import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledPopoverBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'none',
  zIndex: 1,
  backgroundColor: theme.palette.background.mobileMenu,
  color: theme.palette.text.primary,
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2),
  pointerEvents: 'none',
  flexFlow: 'column nowrap',
  gap: theme.spacing(1),
  'a:hover &': {
    display: 'flex',
  },
  '& > .MuiBox-root:nth-of-type(1)': {
    display: 'flex',
    flexFlow: 'row nowrap',
    gap: theme.spacing(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    '& img': {
      background: theme.palette.common.white,
      borderRadius: '100%',
      border: `${theme.spacing(0.5)} solid ${theme.palette.common.white} !important`,
    },
  },
  '& > .MuiBox-root:nth-of-type(2)': {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    '& > .MuiBox-root': {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      gap: theme.spacing(1),
      alignItems: 'center',
      '& > .MuiBox-root': {
        flex: '1 0 auto',
      },
      '& > .MuiBox-root:nth-of-type(1)': {
        fontWeight: theme.typography.fontWeightBold,
        textAlign: 'left',
      },
      '& > .MuiBox-root:nth-of-type(2)': {
        textAlign: 'right',
      },
    },
  },
}));
export const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: theme.spacing(12),
  minHeight: theme.spacing(12),
  borderRadius: theme.spacing(2),
  background: theme.palette.grey.A400,
  border: `2px solid ${theme.palette.text.primary}`,
  display: 'inline-flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
  alignItems: 'center',
  textAlign: 'center',
  '&:hover': {
    background: theme.palette.grey.A200,
  },
}));

export const StyledAnchor = styled('a')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: theme.typography.overline.fontSize,
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  flexFlow: 'column wrap',
  '&:hover': {
    opacity: 0.95,
  },
}));
