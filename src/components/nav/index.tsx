import type { FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import { HOME } from '@utils/links';
import { StyledDBLogo, StyledMenuBar, StyledSectionLimit } from './styles';
import HamburgerIcon from './components/hamburger-icon';
import MenubarDesktop from './components/menubar-desktop';
import DropdownMenu from './components/dropdown-menu';
import MenuItems from './components/menu-items';
import { useNav } from './hooks';

const Nav: FC<HTMLAttributes<HTMLElement>> = () => {
  const { isIcon, isMenu, toggleHamburgerMenu } = useNav();

  return (
    <StyledSectionLimit>
      <MenubarDesktop className="desktop-menu">
        <Link href={HOME} passHref>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a>
              <StyledDBLogo width={175} height={36} />
            </a>
          }
        </Link>
        <HamburgerIcon
          toggleHamburgerMenu={toggleHamburgerMenu}
          isIcon={isIcon}
          sx={{ display: isMenu ? 'none' : undefined }}
        />
        <StyledMenuBar>
          <MenuItems />
        </StyledMenuBar>
      </MenubarDesktop>
      <DropdownMenu isMenu={isMenu} toggleHamburgerMenu={toggleHamburgerMenu} />
    </StyledSectionLimit>
  );
};

export default Nav;
