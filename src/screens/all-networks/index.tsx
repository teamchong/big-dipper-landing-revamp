/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import { Layout } from '@components';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import handleScrollToTop from '@utils/handleScrollToTop';
import { equals } from 'ramda';
import classnames from 'classnames';
import AllNetworksTab from '@src/utils/all-networks-tab';
import type { AllNetworksProps } from './types';
import SearchBox from './components/search-box';
import NetworkBox from './components/network-box';
import { StyledSectionLimit, StyledSectionBox } from './styles';

function getTabIndexFromPath(path: string) {
  switch (path) {
    case '/all-networks#tab=Mainnet':
      return AllNetworksTab.Mainnet;
    case '/all-networks#tab=Testnet':
      return AllNetworksTab.Testnet;
    case '/all-networks#tab=Devnet':
      return AllNetworksTab.Devnet;
    case '/all-networks#tab=Retired':
      return AllNetworksTab.Retired;
    default:
      return AllNetworksTab.All;
  }
}

const AllNetworks: FC<AllNetworksProps> = ({ networkList }) => {
  const router = useRouter();
  const [networks, setNetworks] = useState(networkList ?? []);
  const [tabIndex, setTabIndex] = useState(0);
  const [opened, setOpened] = useState('');
  const handleOpen = useCallback(
    (name: string) => {
      setOpened((prev) => (equals(prev, name) ? '' : name));
    },
    [setOpened],
  );
  const handleHashChange = useCallback((url: string) => {
    const newTabIndex = getTabIndexFromPath(url);
    setTabIndex((prev) => (prev === newTabIndex ? prev : newTabIndex));
  }, []);
  useEffect(() => {
    loadNetworkList().then((res) => setNetworks((prev) => (equals(prev, res) ? prev : res)));
    handleHashChange(router.asPath);
    router.events.on('hashChangeStart', handleHashChange);
    return () => router.events.off('hashChangeStart', handleHashChange);
  }, []);
  const sortedNetworks = useMemo(() => networks.sort((a, b) => a.name.localeCompare(b.name)), [networks]);
  const filteredNetworks = useMemo(() => {
    switch (tabIndex) {
      case AllNetworksTab.Mainnet:
        return sortedNetworks.filter((n) => n.links?.some((l) => /^mainnet$/i.test(l.name)));
      case AllNetworksTab.Testnet:
        return sortedNetworks.filter((n) => n.links?.some((l) => /^testnet$/i.test(l.name)));
      case AllNetworksTab.Devnet:
        return sortedNetworks.filter((n) => n.links?.some((l) => /^devnet$/i.test(l.name)));
      case AllNetworksTab.Retired:
        return sortedNetworks.filter((n) => n.links?.some((l) => /^retired$/i.test(l.name)));
      default:
        return sortedNetworks;
    }
  }, [sortedNetworks, tabIndex]);
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
                    className={classnames({
                      active: tabIndex === AllNetworksTab.All,
                    })}
                  >
                    All
                  </a>
                </Link>
                <Link href="/all-networks#tab=Mainnet" passHref>
                  <a
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Mainnet,
                    })}
                  >
                    Mainnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Testnet" passHref>
                  <a
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Testnet,
                    })}
                  >
                    Testnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Devnet" passHref>
                  <a
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Devnet,
                    })}
                  >
                    Devnet
                  </a>
                </Link>
                <Link href="/all-networks#tab=Retired" passHref>
                  <a
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Retired,
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
            <NetworkBox key={network.name} network={network} isOpened={network.name === opened} onOpen={handleOpen} />
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
