import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import Layout from '@src/components/layout';
import SectionBox from '@src/components/section-box';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Image from 'next/image';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import handleScrollToTop from '@utils/handleScrollToTop';
import equals from 'ramda/es/equals';
import { StyledSectionLimit, StyledImageBox } from './styles';
import Slide1 from './components/slide1';
import SearchBox from './components/search-box';
import NetworkBox from './components/network-box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { HomeProps } from './types';

const Home: FC<HomeProps> = ({ networkList }) => {
  const [networks, setNetworks] = useState(networkList ?? []);
  useEffect(() => {
    loadNetworkList().then((res) => setNetworks((prev) => (equals(prev, res) ? prev : res)));
  }, []);
  const sortedNetworks = useMemo(
    () => networks.sort((a, b) => a.name.localeCompare(b.name)),
    [networks],
  );
  const { t } = useTranslation('common');
  return (
    <Layout>
      <SectionBox sx={{ padding: '0', overflow: 'visible' }}>
        <StyledSectionLimit className="logo">
          <Box className="slider">
            <Slider dots slidesToScroll={1} slidesToShow={1}>
              <Slide1 />
              <Slide1 />
            </Slider>
          </Box>
          <StyledImageBox>
            <Image
              src="/images/big-dipper-transparent.png"
              alt="Big Dipper"
              layout="intrinsic"
              width="482"
              height="452"
            />
          </StyledImageBox>
        </StyledSectionLimit>
        <StyledSectionLimit className="content">
          <Box className="searchBar">
            <Typography variant="h3">{t('supportedNetworks')}</Typography>
            <SearchBox networks={sortedNetworks} />
          </Box>
        </StyledSectionLimit>
        <StyledSectionLimit className="networks">
          {sortedNetworks.map((network) => (
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

export default Home;
