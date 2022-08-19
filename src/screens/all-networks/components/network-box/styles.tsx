import { darken } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: theme.spacing(28),
  minHeight: theme.spacing(10),
  borderRadius: theme.spacing(2),
  background: theme.palette.grey.A400,
  border: `2px solid ${theme.palette.text.primary}`,
  display: 'inline-flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
  alignItems: 'center',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    minWidth: theme.spacing(32),
  },
  '&:hover, &.active': {
    background: theme.palette.grey.A200,
  },
  '& .dropdown-bottom': {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.overline.fontSize,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexFlow: 'row unwrap',
    padding: `0 ${theme.spacing(3)}`,
    gap: theme.spacing(2),
    textAlign: 'left',
    cursor: 'pointer',
    '& .MuiBox-root': {
      flex: '1 1 auto',
    },
    '& img': {
      minWidth: theme.spacing(5),
      minHeight: theme.spacing(5),
    },
    '& .MuiTypography-root': {
      fontWeight: '900',
    },

    '& .MuiBadge-badge': {
      transform: 'scale(1) translate(1.5rem, -0.1rem)',
    },
  },
  '& .popover': {
    position: 'absolute',
    zIndex: 2000,
    borderRadius: theme.spacing(2),
    padding: `${theme.spacing(1)} 0`,
    flexFlow: 'column nowrap',
    gap: theme.spacing(1),
    top: '110%',
    width: '100%',
    background: theme.palette.grey.A200,
    color: theme.palette.common.black,
    outline: `1px solid ${theme.palette.common.black}`,
    boxShadow: theme.shadows[2],
    '& .MuiListItemButton-root': {
      padding: `${theme.spacing(1)} 0 ${theme.spacing(1)} ${theme.spacing(3)}`,
      background: `linear-gradient(0deg, ${theme.palette.grey.A200}, ${darken(theme.palette.grey.A200, 0.05)} 60%, ${theme.palette.grey.A200})`,
      '&:hover': {
        background: theme.palette.grey.A400,
      },
      '& .MuiListItemIcon-root': {
        color: theme.palette.common.black,
      },
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
  },
}));
