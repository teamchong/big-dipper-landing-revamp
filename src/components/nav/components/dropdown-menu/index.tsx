import type { FC } from 'react';
import { StyledDesktopMenuBox, StyledHamburgerIcon } from '../../styles';
import { StyledMobileMenuPaper, StyledModal } from './styles';
import type { DropdownMenuProps } from './types';
import MenuItems from '../menu-items';

const DropdownMenu: FC<DropdownMenuProps> = ({ isMenu, toggleHamburgerMenu }) => {
  return (
    <StyledModal open={isMenu}>
      <>
        <StyledDesktopMenuBox>
          <StyledHamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} isIcon={false} />
        </StyledDesktopMenuBox>
        <StyledMobileMenuPaper>
          <MenuItems />
        </StyledMobileMenuPaper>
      </>
    </StyledModal>
  );
};

export default DropdownMenu;
