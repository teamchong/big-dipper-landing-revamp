import type { FC } from 'react';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getChainIdFromNetwork from '@src/utils/get-chain-id-from-network';
import MenuList from '@mui/material/MenuList';
import Badge from '@mui/material/Badge';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import classnames from 'classnames';
import type { NetworkBoxProps } from './types';
import { StyledBox, StyledDropdownBottomBox, StyledPopoverBox } from './styles';
import NetworkMenuLink from '../network-menu-link';

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = ({ network, isOpened, onOpen }) => {
  const handleClick = useCallback(() => onOpen(network.name), [network, onOpen]);
  const chainId = getChainIdFromNetwork(network);
  const { name, logo, links } = network;
  return (
    <StyledBox className={classnames({ active: isOpened })}>
      {isOpened && (
        <StyledPopoverBox>
          <MenuList>
            {links.map((link) => (
              <NetworkMenuLink key={link.chain_id} link={link} />
            ))}
          </MenuList>
        </StyledPopoverBox>
      )}
      <StyledDropdownBottomBox onClick={handleClick}>
        <img alt={name} src={logo} width="30" height="30" />
        <Box>
          <Typography>{name}</Typography>
          <Box>
            <Badge color="secondary" badgeContent={links?.length}>
              {chainId}
            </Badge>
          </Box>
        </Box>
        {!!links?.[0] && (
          <>
            {isOpened && <KeyboardArrowUpIcon width={16} height={16} />}
            {!isOpened && <KeyboardArrowDownIcon width={16} height={16} />}
          </>
        )}
      </StyledDropdownBottomBox>
    </StyledBox>
  );
};

export default NetworkBox;
