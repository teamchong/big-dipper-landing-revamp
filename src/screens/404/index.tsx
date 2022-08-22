/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@mui/material/Typography';
import Layout from '@src/components/layout';
import Link from 'next/link';
import { StyledSectionBox } from './styles';

const FourOhFour = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <StyledSectionBox>
        <Typography className="title" variant="h4">
          {t('404')}
        </Typography>

        <Link href="/">
          <a>{t('goBackHome')}</a>
        </Link>
      </StyledSectionBox>
    </Layout>
  );
};

export default FourOhFour;
