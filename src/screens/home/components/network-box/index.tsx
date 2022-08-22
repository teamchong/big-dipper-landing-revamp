import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import getUrlFromNetwork from '@src/utils/get-url-from-network';
import LinearProgress from '@mui/material/LinearProgress';
import { equals } from 'ramda';
import getNetworkInfo, { NetworkData } from '@src/utils/get-network-info';
import type { NetworkBoxProps } from './types';
import { StyledAnchor, StyledBox, StyledPopoverBox } from './styles';

/* A React component that renders a network box. */
const NetworkBox: FC<NetworkBoxProps> = ({ network }) => {
  const url = getUrlFromNetwork(network);
  const { name, logo } = network;

  const [data, setData] = useState<NetworkData | null | undefined>(undefined);
  useEffect(() => {
    getNetworkInfo(network.name)
      .then((res) => setData((prev) => (equals(prev, res) ? prev : res)))
      .catch(() => setData(null));
  }, []);
  return (
    <StyledBox>
      <Link href={url} passHref>
        {
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <StyledAnchor>
            {(data === undefined || !!data) && (
              <StyledPopoverBox>
                <Box>
                  <img alt={name} src={logo} width="30" height="30" />
                  <Typography>{name}</Typography>
                </Box>
                {data === undefined && <LinearProgress />}
                {!!data && (
                  <Box>
                    {!!data.token_price?.[0] && (
                      <Box>
                        <Box>{data.token_price[0].unit_name?.toUpperCase()}</Box>
                        <Box>{data.token_price[0].price}</Box>
                      </Box>
                    )}
                    {!!data.block?.[0]?.height && (
                      <Box>
                        <Box>Blocks</Box>
                        <Box>{data.block[0].height}</Box>
                      </Box>
                    )}
                    {!!data.genesis?.[0].chain_id && (
                      <Box>
                        <Box>Chain ID</Box>
                        <Box>{data.genesis?.[0].chain_id}</Box>
                      </Box>
                    )}
                  </Box>
                )}
              </StyledPopoverBox>
            )}
            <img alt={name} src={logo} width="30" height="30" />
            {name}
          </StyledAnchor>
        }
      </Link>
    </StyledBox>
  );
};

export default NetworkBox;
