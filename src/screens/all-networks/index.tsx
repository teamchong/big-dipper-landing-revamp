import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import SectionBox from '@src/components/section-box';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import handleScrollToTop from '@utils/handleScrollToTop';
import equals from 'ramda/es/equals';
import { StyledSectionLimit } from './styles';
import NetworkBox from './components/network-box';
import SearchBox from './components/search-box';
import type { AllNetworksProps } from './types';

const AllNetworks: FC<AllNetworksProps> = ({ networkList }) => {
  const [networks, setNetworks] = useState(networkList ?? []);
  useEffect(() => {
    loadNetworkList().then((res) => setNetworks((prev) => (equals(prev, res) ? prev : res)));
  }, []);
  const { t } = useTranslation('all-networks');
  return (
    <Layout>
      <SectionBox sx={{ padding: '0', overflow: 'visible' }}>
        <StyledSectionLimit className="content">
          <Box className="searchBar">
            <Typography variant="h3">{t('allNetworks')}</Typography>
            <SearchBox networks={networks} />
          </Box>
        </StyledSectionLimit>
        <StyledSectionLimit className="networks">
          {networks.map((network) => (
            <NetworkBox key={network.name} network={network} />
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
