import type { FC } from 'react';
import { StyledMobileMenuPaper, StyledModal } from './styles';
import MenubarDesktop from '../menubar-desktop';
import type { DropdownMenuProps } from './types';
import MenuItems from '../menu-items';
import HamburgerIcon from '../hamburger-icon';

const DropdownMenu: FC<DropdownMenuProps> = ({ isMenu, toggleHamburgerMenu }) => {
  return (
    <StyledModal open={isMenu}>
      <>
        <MenubarDesktop>
          <HamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} isIcon={false} />
        </MenubarDesktop>
        <StyledMobileMenuPaper>
          <MenuItems />
        </StyledMobileMenuPaper>
      </>
    </StyledModal>
  );
};

export default DropdownMenu;
