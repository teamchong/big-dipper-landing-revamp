import { styled } from '@mui/material/styles';
import SectionLimit from '@src/components/section-limit';
import MenuDesktop from './components/menu-desktop';
import MenuMobile from './components/menu-mobile';
import Content from './components/content';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '& .title': {
    color: theme.palette.common.white,
  },
  '& .header__wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
  },
  '& .content__wrapper': {
    display: 'flex',
    alignItems: 'flex-start',
  },
}));

export const StyledMenuMobile = styled(MenuMobile)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const StyledMenuDesktop = styled(MenuDesktop)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    marginRight: theme.spacing(4),
  },
}));

export const StyledContent = styled(Content)({ flex: 1 });
