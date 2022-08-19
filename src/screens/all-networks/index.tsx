import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import { useMemo, useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import SectionBox from '@src/components/section-box';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import { StyledSectionLimit } from './styles';
import NetworkBox from './components/network-box';
import SearchBox from './components/search-box';
import type { AllNetworksProps } from './types';

const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const AllNetworks: FC<AllNetworksProps> = ({ networkList }) => {
  const [networks, setNetworks] = useState(networkList ?? []);
  useEffect(() => {
    loadNetworkList().then((result) => setNetworks(result));
  }, []);
  const { t } = useTranslation('all-networks');
  const options = useMemo(() => {
    const list = networks
      .filter((n) => n.links[0])
      .map(({ name: label, logo, links: [link] }) => ({
        label,
        logo,
        link,
      }));
    list.sort((a, b) => a.label.localeCompare(b.label));
    return list;
  }, [networks]);
  return (
    <Layout>
      <SectionBox sx={{ padding: '0', overflow: 'visible' }}>
        <StyledSectionLimit className="content">
          <Box className="searchBar">
            <Typography variant="h3">{t('allNetworks')}</Typography>
            <SearchBox options={options} />
          </Box>
        </StyledSectionLimit>
        <StyledSectionLimit className="networks">
          {options.map(({ label, logo, link }) => (
            <NetworkBox key={label} label={label} logo={logo} link={link} />
          ))}
        </StyledSectionLimit>
        <StyledSectionLimit className="scrollToTop">
          <Fab onClick={handleScrollToTop}>
            <KeyboardArrowUpIcon />
          </Fab>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default AllNetworks;
