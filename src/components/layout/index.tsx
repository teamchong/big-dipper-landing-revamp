import type { FC, HTMLAttributes } from 'react';
import { Nav, Footer } from '..';
import type { LayoutProps } from './types';
import { StyledMain, StyledContainer, StyledContent } from './styles';

/**
 * The `Layout` React component.
 * @param  - FC<LayoutProps & HTMLAttributes<HTMLElement>>
 * @returns A styled main element with a box element inside of it. The box element has a nav, styled
 * div, and footer element inside of it.
 */
const Layout: FC<LayoutProps & HTMLAttributes<HTMLElement>> = ({ children, ...props }) => {
  return (
    <StyledMain {...props}>
      <StyledContainer>
        <Nav />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </StyledContainer>
    </StyledMain>
  );
};

export default Layout;
