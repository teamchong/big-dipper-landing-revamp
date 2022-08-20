import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { StyledBox, StyledTypography1, StyledTypography2 } from './styles';

/* A functional component that is using the `useTranslation` hook to get the translation for the
`slider1Header` and `slider1Description` keys. */
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
