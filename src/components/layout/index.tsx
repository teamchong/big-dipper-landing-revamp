import { FC, HTMLAttributes } from 'react';
import { Box } from '@mui/material';
import { Nav, Footer } from '..';
import { LayoutProps } from './types';
import { StyledMain, StyledDiv } from './styles';

const Layout: FC<LayoutProps & HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <StyledMain>
      <Box className="footerBox">
        <Nav />
        <StyledDiv>{children}</StyledDiv>
        <Footer />
      </Box>
    </StyledMain>
  );
};

export default Layout;
