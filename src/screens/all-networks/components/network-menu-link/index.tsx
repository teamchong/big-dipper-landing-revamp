import { FC } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NetworkMenuLinkProps } from '../network-box/types';

/**
 * It renders a link to a network
 * @param  - `link` - the network link object
 * @returns A link to the network menu link
 */
const NetworkMenuLink: FC<NetworkMenuLinkProps> = ({ link }) => {
  const { name, chain_id: chainId, url } = link;
  return (
    <Link href={url} passHref>
      <ListItemButton>
        <ListItemText>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="subtitle1">{chainId}</Typography>
        </ListItemText>
        <ListItemIcon>
          <KeyboardArrowRightIcon height={16} />
        </ListItemIcon>
      </ListItemButton>
    </Link>
  );
};

export default NetworkMenuLink;
