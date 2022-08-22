/* eslint-disable jsx-a11y/anchor-is-valid */
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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import handleScrollToTop from '@utils/handleScrollToTop';
import { equals } from 'ramda';
import classnames from 'classnames';
import AllNetworksTab from '@src/utils/all-networks-tab';
import SectionLimit from '@src/components/section-limit';
import SearchBox from './components/search-box';
import type { AllNetworksProps } from './types';
import NetworkBox from './components/network-box';
import {
  StyledFab,
  StyledSectionBox,
  StyledSearchBarBox,
  StyledNetworksBox,
  StyledScrollTopBox,
  StyledTabsBox,
  StyledTab,
  StyledSubtitle1,
} from './styles';

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
        <SectionLimit>
          <StyledSearchBarBox>
            <Typography variant="h3">{t('allNetworks')}</Typography>
            <Box>
              <StyledSubtitle1>
                <Trans
                  i18nKey="all-networks:allNetworksDescription"
                  components={[<Link href="https://www.forbole.com/contact" />]}
                />
              </StyledSubtitle1>
              <StyledTabsBox>
                <Link href="/all-networks" passHref>
                  <StyledTab
                    className={classnames({
                      active: tabIndex === AllNetworksTab.All,
                    })}
                  >
                    All
                  </StyledTab>
                </Link>
                <Link href="/all-networks#tab=Mainnet" passHref>
                  <StyledTab
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Mainnet,
                    })}
                  >
                    Mainnet
                  </StyledTab>
                </Link>
                <Link href="/all-networks#tab=Testnet" passHref>
                  <StyledTab
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Testnet,
                    })}
                  >
                    Testnet
                  </StyledTab>
                </Link>
                <Link href="/all-networks#tab=Devnet" passHref>
                  <StyledTab
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Devnet,
                    })}
                  >
                    Devnet
                  </StyledTab>
                </Link>
                <Link href="/all-networks#tab=Retired" passHref>
                  <StyledTab
                    className={classnames({
                      active: tabIndex === AllNetworksTab.Retired,
                    })}
                  >
                    Retired
                  </StyledTab>
                </Link>
              </StyledTabsBox>
            </Box>
            <SearchBox networks={filteredNetworks} />
          </StyledSearchBarBox>
          <StyledNetworksBox>
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
          </StyledNetworksBox>
          <StyledScrollTopBox>
            <StyledFab onClick={handleScrollToTop}>
              <KeyboardArrowUpIcon width={36} height={36} />
            </StyledFab>
          </StyledScrollTopBox>
        </SectionLimit>
      </StyledSectionBox>
    </Layout>
  );
};

export default AllNetworks;
