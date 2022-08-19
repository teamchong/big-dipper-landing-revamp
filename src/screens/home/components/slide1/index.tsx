import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { StyledBox, StyledTypography1, StyledTypography2 } from './styles';

const Slide1 = () => {
  const { t } = useTranslation('common');
  return (
    <StyledBox>
      <StyledTypography1 variant="h2">{t('slider1Header')}</StyledTypography1>
      <StyledTypography2 variant="h4">{t('slider1Description')}</StyledTypography2>
    </StyledBox>
  );
};

export default Slide1;
