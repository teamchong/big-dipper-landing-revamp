import { FC, HTMLAttributes } from 'react';
import BDLogo from '@assets/big-dipper-red.svg';
import { StyledSectionLimit } from './styles';
import HamburgerIcon from './components/hamburger-icon';
import DropdownMenu from './components/dropdown-menu';
import { useNav } from './hooks';

const Nav: FC<HTMLAttributes<HTMLElement>> = () => {
  const { isIcon, isMenu, toggleHamburgerMenu } = useNav();

  return (
    <StyledSectionLimit>
      <div className="wrapper">
        <BDLogo className="logo" />
        <HamburgerIcon
          toggleHamburgerMenu={toggleHamburgerMenu}
          isIcon={isIcon}
          sx={{ display: { md: 'none' } }}
        />
      </div>
      <DropdownMenu isMenu={isMenu} />
    </StyledSectionLimit>
  );
};

export default Nav;
