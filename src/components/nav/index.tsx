import type { FC, HTMLAttributes } from 'react';
import Link from 'next/link';
import { HOME } from '@utils/links';
import {
  StyledDesktopMenuBox,
  StyledDBLogo,
  StyledHamburgerIcon,
  StyledMenuBar,
  StyledSectionLimit,
} from './styles';
import DropdownMenu from './components/dropdown-menu';
import { useNav } from './hooks';
import MenuItems from './components/menu-items';

const Nav: FC<HTMLAttributes<HTMLElement>> = () => {
  const { isIcon, isMenu, toggleHamburgerMenu } = useNav();

  return (
    <StyledSectionLimit>
      <StyledDesktopMenuBox className="desktop-menu">
        <Link href={HOME} passHref>
          {
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a>
              <StyledDBLogo width={175} height={36} />
            </a>
          }
        </Link>
        <StyledHamburgerIcon
          toggleHamburgerMenu={toggleHamburgerMenu}
          isIcon={isIcon}
          sx={{ display: isMenu ? 'none' : undefined }}
        />
        <StyledMenuBar>
          <MenuItems />
        </StyledMenuBar>
      </StyledDesktopMenuBox>
      <DropdownMenu isMenu={isMenu} toggleHamburgerMenu={toggleHamburgerMenu} />
    </StyledSectionLimit>
  );
};

export default Nav;
