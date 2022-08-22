/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { StyledLayout } from './styles';

const FourOhFour = () => {
  const { t } = useTranslation('common');

  return (
    <StyledLayout>
      <Image alt={t('404')} src="/images/404-unicorn.svg" width={380} height={380} />
      <Typography variant="h3">
        {t('404')}
      </Typography>
      <p> </p>
      <Typography variant="h4">{t('404Description')}</Typography>
    </StyledLayout>
  );
};

export default FourOhFour;
