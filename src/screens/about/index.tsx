import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Typography from '@mui/material/Typography';
import { ContentBox, Layout, SectionBox } from '@components';
import { StyledSectionLimit } from './styles';

/* A React component that renders the About page. */
const About = () => {
  const { t } = useTranslation('about');
  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <Typography className="title" variant="h2">
            {t('about')}
          </Typography>
          <ContentBox>
            <Typography>{t('description')}</Typography>
          </ContentBox>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default About;
