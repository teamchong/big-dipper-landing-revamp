import useTranslation from 'next-translate/useTranslation';
import type { FC } from 'react';
import { useMemo, useEffect, useState } from 'react';
import Layout from '@src/components/layout';
import SectionBox from '@src/components/section-box';
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import Image from 'next/image';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import loadNetworkList from '@utils/load-network-list';
import { StyledSectionLimit, StyledImageBox } from './styles';
import Slide1 from './components/slide1';
import SearchBox from './components/search-box';
import NetworkBox from './components/network-box';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { HomeProps } from './types';


const handleScrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const Home: FC<HomeProps> = ({ networkList }) => {
  const [networks, setNetworks] = useState(networkList ?? []);
  useEffect(() => {
    loadNetworkList().then((result) => setNetworks(result));
  }, []);
  const { t } = useTranslation('common');
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

export default Home;
