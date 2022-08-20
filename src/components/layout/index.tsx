import type { FC, HTMLAttributes } from 'react';
import Box from '@mui/material/Box';
import { Nav, Footer } from '..';
import type { LayoutProps } from './types';
import { StyledMain, StyledDiv } from './styles';

/**
 * The `Layout` React component.
 * @param  - FC<LayoutProps & HTMLAttributes<HTMLElement>>
 * @returns A styled main element with a box element inside of it. The box element has a nav, styled
 * div, and footer element inside of it.
 */
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
