import type { FC } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Box from '@mui/material/Box';
import type { NetworkBoxProps } from './types';
import { StyledBox } from './styles';

const NetworkBox: FC<NetworkBoxProps> = ({ label, logo, link }) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  return (
    <StyledBox>
      <Link href={link.url} passHref>
        <a href="/" ref={anchorRef}>
          {/* <Box className="popover">
            <Image alt={label} src={logo} width="30" height="30" unoptimized />
            {label}
            <Box>{JSON.stringify(link)}</Box>
          </Box> */}
          <Image alt={label} src={logo} width="30" height="30" unoptimized />
          {label}
        </a>
      </Link>
    </StyledBox>
  );
};
export default NetworkBox;
