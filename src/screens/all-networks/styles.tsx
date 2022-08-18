import { styled } from '@mui/material/styles';
import { SectionLimit } from '@components';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '&.content': {
    padding: `0 ${theme.spacing(4)}`,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(10)}`,
    },
    '& .searchBar': {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& .MuiTypography-root': {
        display: 'inline-block',
        fontSize: theme.typography.h2.fontSize,
        padding: `${theme.spacing(3)} 0`,
        textAlign: 'center',
        width: '100%',
        [theme.breakpoints.up('md')]: {
          fontSize: theme.typography.h3.fontSize,
          width: 'auto',
          display: 'block',
        },
      },
    },
  },
  '&.networks': {
    padding: theme.spacing(4),
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${theme.spacing(12)}, 1fr))`,
    justifyContent: 'space-between',
    gridGap: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: `0 ${theme.spacing(10)}`,
      gridGap: theme.spacing(3),
    },
  },
  '&.scrollToTop': {
    padding: theme.spacing(6),
    textAlign: 'center',
    '& .MuiFab-root': {
      width: theme.spacing(4),
      height: theme.spacing(4),
      background: 'rgba(255,255,255,0.2)',
      border: `1px solid ${theme.palette.text.primary}`,
      color: theme.palette.text.primary,
    },
  },
}));
