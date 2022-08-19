import Box from '@mui/material/Box';
import { alpha } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: theme.spacing(12),
  minHeight: theme.spacing(12),
  borderRadius: theme.spacing(2),
  background: theme.palette.grey.A400,
  border: `1px solid ${theme.palette.text.primary}`,
  display: 'inline-flex',
  justifyContent: 'center',
  flexFlow: 'row wrap',
  alignItems: 'center',
  textAlign: 'center',
  '& a': {
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.overline.fontSize,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
    '& .popover': {
      position: 'absolute',
      display: 'none',
      zIndex: 1,
      backgroundColor: alpha(theme.palette.background.mobileMenu, 0.99),
      color: theme.palette.text.primary,
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      pointerEvents: 'none',
    },
  },
  '& a:hover .popover': {
    display: 'flex',
  },
}));
