import type { FC, HTMLAttributes } from 'react';
import Box from '@mui/material/Box';
import Nav from '../nav';
import Footer from '../footer';
import type { LayoutProps } from './types';
import { StyledMain, StyledDiv } from './styles';

const Layout: FC<LayoutProps & HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  return (
    <StyledMain {...props}>
      <Box className="footerBox">
        <Nav />
        <StyledDiv>{children}</StyledDiv>
        <Footer />
      </Box>
    </StyledMain>
  );
};

export default Layout;
