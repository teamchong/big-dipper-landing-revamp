import type { FC } from 'react';
import { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getChainIdFromNetwork from '@src/utils/get-chain-id-from-network';
import MenuList from '@mui/material/MenuList';
import Badge from '@mui/material/Badge';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import classnames from 'classnames';
import type { NetworkBoxProps, NetworkMenuLinkProps } from './types';
import { StyledBox } from './styles';

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = ({ network, isOpened, onOpen }) => {
  const handleClick = useCallback(() => onOpen(network.name), [network, onOpen]);
  const chainId = getChainIdFromNetwork(network);
  const { name, logo, links } = network;
  return (
    <StyledBox className={classnames({ active: isOpened })}>
      {isOpened && (
        <Box className="popover">
          <MenuList>
            {links.map((link) => (
              <NetworkMenuLink key={link.chain_id} link={link} />
            ))}
          </MenuList>
        </Box>
      )}
      <Box className="dropdown-bottom" onClick={handleClick}>
        <Image alt={name} src={logo} width="30" height="30" unoptimized />
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
            {isOpened && <KeyboardArrowUpIcon height={16} />}
            {!isOpened && <KeyboardArrowDownIcon height={16} />}
          </>
        )}
      </Box>
    </StyledBox>
  );
};

export default NetworkBox;
