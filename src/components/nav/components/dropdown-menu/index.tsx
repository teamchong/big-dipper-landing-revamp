import type { FC } from 'react';
import { Wrapper, StyledHamburgerIcon } from '../../styles';
import { StyledPaper, StyledModal } from './styles';
import type { DropdownMenuProps } from './types';
import MenuItems from '../menu-items';

const DropdownMenu: FC<DropdownMenuProps> = ({ isMenu, toggleHamburgerMenu }) => {
  return (
    <StyledModal open={isMenu}>
      <>
        <Wrapper>
          <StyledHamburgerIcon toggleHamburgerMenu={toggleHamburgerMenu} isIcon={false} />
        </Wrapper>
        <StyledPaper>
          <MenuItems />
        </StyledPaper>
      </>
    </StyledModal>
  );
};

export default DropdownMenu;
