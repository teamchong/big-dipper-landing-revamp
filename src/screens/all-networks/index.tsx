import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import Layout from '@src/components/layout';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import handleScrollToTop from '@utils/handleScrollToTop';
import { equals } from 'ramda';
import classnames from 'classnames';
import type { AllNetworksProps } from './types';
import SearchBox from './components/search-box';
import NetworkBox from './components/network-box';
import { StyledSectionLimit, StyledSectionBox } from './styles';

const AllNetworks: FC<AllNetworksProps> = ({ networkList }) => {
  const router = useRouter();
  const [networks, setNetworks] = useState(networkList ?? []);
  const [opened, setOpened] = useState('');
  const handleOpen = useCallback(
    (name: string) => {
      setOpened((prev) => (equals(prev, name) ? '' : name));
    },
    [setOpened],
  );
  useEffect(() => {
    loadNetworkList().then((res) => setNetworks((prev) => (equals(prev, res) ? prev : res)));
  }, []);
  const sortedNetworks = useMemo(
    () => networks.sort((a, b) => a.name.localeCompare(b.name)),
    [networks],
  );
  const filteredNetworks = useMemo(() => {
    switch (router.asPath) {
      case '/all-networks#tab=Mainnet':
        return sortedNetworks.filter((n) => n.links?.some((l) => /^mainnet$/i.test(l.name)));
      case '/all-networks#tab=Testnet':
        return sortedNetworks.filter((n) => n.links?.some((l) => /^testnet$/i.test(l.name)));
      case '/all-networks#tab=Devnet':
        return sortedNetworks.filter((n) => n.links?.some((l) => /^devnet$/i.test(l.name)));
      case '/all-networks#tab=Retired':
        return sortedNetworks.filter((n) => n.links?.some((l) => /^retired$/i.test(l.name)));
      default:
        return sortedNetworks;
    }
  }, [sortedNetworks, router.asPath]);
  const { t } = useTranslation('all-networks');
  return (
    <Layout>
      <StyledSectionBox>
        <StyledSectionLimit className="content">
          <Box className="searchBar">
            <Typography variant="h3">{t('allNetworks')}</Typography>
            <Box>
              <Typography variant="subtitle1">
                <Trans
                  i18nKey="all-networks:allNetworksDescription"
                  components={[<Link href="https://www.forbole.com/contact" />]}
                />
              </Typography>
              <Box className="tabs">
                <Link href="/all-networks" passHref>
                  <a
                    href="/"
                    className={classnames({
                      active: ![
                        '/all-networks#tab=Mainnet',
                        '/all-networks#tab=Testnet',
                        '/all-networks#tab=Devnet',
                        '/all-networks#tab=Retired',
                      ].some((l) => router.asPath === l),
                    })}
                  >
                    All
                  </a>
                </Link>
                <Link href="/all-networks#tab=Mainnet" passHref>
                  <a
                    href="/"
                    className={classnames({
                      active: router.asPath.match('/all-networks#tab=Mainnet'),
                    })}
                  >
                    Mainnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Testnet" passHref>
                  <a
                    href="/"
                    className={classnames({
                      active: router.asPath.match('/all-networks#tab=Testnet'),
                    })}
                  >
                    Testnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Devnet" passHref>
                  <a
                    href="/"
                    className={classnames({
                      active: router.asPath.match('/all-networks#tab=Devnet'),
                    })}
                  >
                    Devnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Retired" passHref>
                  <a
                    href="/"
                    className={classnames({
                      active: router.asPath.match('/all-networks#tab=Retired'),
                    })}
                  >
                    Retired
                  </a>
                </Link>
              </Box>
            </Box>
            <SearchBox networks={filteredNetworks} />
          </Box>
        </StyledSectionLimit>
        <StyledSectionLimit className="networks">
          {filteredNetworks.map((network) => (
            <NetworkBox
              key={network.name}
              network={network}
              isOpened={network.name === opened}
              onOpen={handleOpen}
            />
          ))}
          {!filteredNetworks.length && (
            <Box
              sx={{
                background: '#fff',
                padding: '2rem',
                borderRadius: '1rem',
                color: '#000',
              }}
            >
              {t('common:noMatch')}
            </Box>
          )}
        </StyledSectionLimit>
        <StyledSectionLimit className="scrollToTop">
          <Fab onClick={handleScrollToTop}>
            <KeyboardArrowUpIcon height={36} />
          </Fab>
        </StyledSectionLimit>
      </StyledSectionBox>
    </Layout>
  );
};

export default AllNetworks;
