import { styled } from '@mui/material/styles';
import SectionBox from '@src/components/section-box';

export const StyledSectionBox = styled(SectionBox)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column nowrap',
  minHeight: theme.spacing(50),
  gap: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
}));
