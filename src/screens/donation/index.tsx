import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CopyIcon from '@assets/copy.svg';
import { ContentBox, Layout, SectionBox } from '@components';
import { StyledSectionLimit } from './styles';
import { addresses } from './utils';
import { useDonation } from './hooks';

/* A React component that renders the Donation page. */
const Donation = () => {
  const { t } = useTranslation('donation');
  const { handleCopyToClipboard } = useDonation();

  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <Typography className="title" variant="h2">
            {t('donation')}
          </Typography>
          <Typography className="description">{t('description')}</Typography>
          <div className="address__container">
            {addresses.map((x) => (
              <ContentBox key={x.address}>
                <img className="address__logo" src={x.imgSrc} alt={x.key} />
                <Typography className="address__key" variant="h4">
                  {t(x.key)}
                </Typography>
                <Typography className="address__address">{x.address}</Typography>
                <Button
                  variant="contained"
                  className="address__button"
                  onClick={() => handleCopyToClipboard(x.address)}
                >
                  <CopyIcon className="address__button--copy" />
                  {t('copy')}
                </Button>
              </ContentBox>
            ))}
          </div>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Donation;
