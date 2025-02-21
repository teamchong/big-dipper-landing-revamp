import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@mui/material';
import { Layout, SectionBox, ContentBox } from '@components';
import { StyledSectionLimit } from './styles';
import { definitions } from './utils';

const TermsAndConditions = () => {
  const { t } = useTranslation('terms');
  return (
    <Layout>
      <SectionBox main>
        <StyledSectionLimit>
          <Typography className="title" variant="h2">
            {t('termsAndConditions')}
          </Typography>
          <Typography className="intro">{t('intro')}</Typography>
          <Typography className="intro">Last updated: April 02, 2021</Typography>
          <ContentBox>
            <Typography variant="h3">Interpretation and Definitions</Typography>
            <div className="indent">
              <Typography variant="h4">Interpretation</Typography>
              <Typography className="description">
                The words of which the initial letter is capitalized have meanings defined under the
                following conditions. The following definitions shall have the same meaning
                regardless of whether they appear in singular or in plural.
              </Typography>
              <Typography variant="h4">Definitions</Typography>
              <Typography className="description">
                For the purposes of these Terms and Conditions:
              </Typography>
              <ul>
                {definitions.map((x) => {
                  return (
                    <Typography component="li" key={x.key}>
                      <span className="key">{x.key}</span>
                      {' '}
                      {x.details}
                      {x.key === 'Website' && (
                        <a href="https://bigdipper.live" target="_blank" rel="noreferrer">
                          https://bigdipper.live
                        </a>
                      )}
                    </Typography>
                  );
                })}
              </ul>
            </div>
            <Typography variant="h3">Acknowledgment</Typography>
            <Typography className="description">
              These are the Terms and Conditions governing the use of this Service and the agreement
              that operates between You and the Company. These Terms and Conditions set out the
              rights and obligations of all users regarding the use of the Service.
            </Typography>
            <Typography className="description">
              Your access to and use of the Service is conditioned on Your acceptance of and
              compliance with these Terms and Conditions. These Terms and Conditions apply to all
              visitors, users and others who access or use the Service.
            </Typography>
            <Typography className="description">
              By accessing or using the Service You agree to be bound by these Terms and Conditions.
              If You disagree with any part of these Terms and Conditions then You may not access
              the Service.
            </Typography>
            <Typography className="description">
              You represent that you are over the age of 18. The Company does not permit those under
              18 to use the Service.
            </Typography>
            <Typography className="description">
              Your access to and use of the Service is also conditioned on Your acceptance of and
              compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our
              policies and procedures on the collection, use and disclosure of Your personal
              information when You use the Application or the Website and tells You about Your
              privacy rights and how the law protects You. Please read Our Privacy Policy carefully
              before using Our Service.
            </Typography>
            <Typography variant="h3">Intellectual Property</Typography>
            <Typography className="description">
              The Service and its original content (excluding Content provided by You or other
              users), features and functionality are and will remain the exclusive property of the
              Company and its licensors.
            </Typography>
            <Typography className="description">
              The Service is protected by copyright, trademark, and other laws of both the Country
              and foreign countries.
            </Typography>
            <Typography className="description">
              Our trademarks and trade dress may not be used in connection with any product or
              service without the prior written consent of the Company.
            </Typography>
            <Typography variant="h3">Your Feedback to Us</Typography>
            <Typography className="description">
              You assign all rights, title and interest in any Feedback You provide the Company. If
              for any reason such assignment is ineffective, You agree to grant the Company a
              non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to
              use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback
              without restriction.
            </Typography>
            <Typography variant="h3">Links to Other Websites</Typography>
            <Typography className="description">
              Our Service may contain links to third-party web sites or services that are not owned
              or controlled by the Company.
            </Typography>
            <Typography className="description">
              The Company has no control over, and assumes no responsibility for, the content,
              privacy policies, or practices of any third party web sites or services. You further
              acknowledge and agree that the Company shall not be responsible or liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused by or in connection
              with the use of or reliance on any such content, goods or services available on or
              through any such web sites or services.
            </Typography>
            <Typography className="description">
              We strongly advise You to read the terms and conditions and privacy policies of any
              third-party web sites or services that You visit.
            </Typography>
            <Typography variant="h3">Termination</Typography>
            <Typography className="description">
              We may terminate or suspend Your access immediately, without prior notice or
              liability, for any reason whatsoever, including without limitation if You breach these
              Terms and Conditions.
            </Typography>
            <Typography className="description">
              Upon termination, Your right to use the Service will cease immediately.
            </Typography>
            <Typography variant="h3">Limitation of Liability</Typography>
            <Typography className="description">
              Notwithstanding any damages that You might incur, the entire liability of the Company
              and any of its suppliers under any provision of this Terms and Your exclusive remedy
              for all of the foregoing shall be limited to the amount actually paid by You through
              the Service or 100 USD if You haven&apos;t purchased anything through the Service.
            </Typography>
            <Typography className="description">
              To the maximum extent permitted by applicable law, in no event shall the Company or
              its suppliers be liable for any special, incidental, indirect, or consequential
              damages whatsoever (including, but not limited to, damages for loss of profits, loss
              of data or other information, for business interruption, for personal injury, loss of
              privacy arising out of or in any way related to the use of or inability to use the
              Service, third-party software and/or third-party hardware used with the Service, or
              otherwise in connection with any provision of this Terms), even if the Company or any
              supplier has been advised of the possibility of such damages and even if the remedy
              fails of its essential purpose.
            </Typography>
            <Typography className="description">
              Some states do not allow the exclusion of implied warranties or limitation of
              liability for incidental or consequential damages, which means that some of the above
              limitations may not apply. In these states, each party&apos;s liability will be
              limited to the greatest extent permitted by law.
            </Typography>
            <Typography variant="h3">
              &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
            </Typography>
            <Typography className="description">
              The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with
              all faults and defects without warranty of any kind. To the maximum extent permitted
              under applicable law, the Company, on its own behalf and on behalf of its Affiliates
              and its and their respective licensors and service providers, expressly disclaims all
              warranties, whether express, implied, statutory or otherwise, with respect to the
              Service, including all implied warranties of merchantability, fitness for a particular
              purpose, title and non-infringement, and warranties that may arise out of course of
              dealing, course of performance, usage or trade practice. Without limitation to the
              foregoing, the Company provides no warranty or undertaking, and makes no
              representation of any kind that the Service will meet Your requirements, achieve any
              intended results, be compatible or work with any other software, applications, systems
              or services, operate without interruption, meet any performance or reliability
              standards or be error free or that any errors or defects can or will be corrected.
            </Typography>
            <Typography className="description">
              Without limiting the foregoing, neither the Company nor any of the company&apos;s
              provider makes any representation or warranty of any kind, express or implied: (i) as
              to the operation or availability of the Service, or the information, content, and
              materials or products included thereon; (ii) that the Service will be uninterrupted or
              error-free; (iii) as to the accuracy, reliability, or currency of any information or
              content provided through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of the Company are free of viruses,
              scripts, trojan horses, worms, malware, timebombs or other harmful components.
            </Typography>
            <Typography className="description">
              Some jurisdictions do not allow the exclusion of certain types of warranties or
              limitations on applicable statutory rights of a consumer, so some or all of the above
              exclusions and limitations may not apply to You. But in such a case the exclusions and
              limitations set forth in this section shall be applied to the greatest extent
              enforceable under applicable law.
            </Typography>
            <Typography variant="h3">Governing Law</Typography>
            <Typography className="description">
              The laws of the Country, excluding its conflicts of law rules, shall govern this Terms
              and Your use of the Service. Your use of the Application may also be subject to other
              local, state, national, or international laws.
            </Typography>
            <Typography variant="h3">Disputes Resolution</Typography>
            <Typography className="description">
              If You have any concern or dispute about the Service, You agree to first try to
              resolve the dispute informally by contacting the Company.
            </Typography>
            <Typography variant="h3">For European Union (EU) Users</Typography>
            <Typography className="description">
              If You are a European Union consumer, you will benefit from any mandatory provisions
              of the law of the country in which you are resident in.
            </Typography>
            <Typography variant="h3">United States Legal Compliance</Typography>
            <Typography className="description">
              You represent and warrant that (i) You are not located in a country that is subject to
              the United States government embargo, or that has been designated by the United States
              government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed
              on any United States government list of prohibited or restricted parties.
            </Typography>
            <Typography variant="h3">Severability and Waiver</Typography>
            <div className="indent">
              <Typography variant="h4">Severability</Typography>
              <Typography className="description">
                If any provision of these Terms is held to be unenforceable or invalid, such
                provision will be changed and interpreted to accomplish the objectives of such
                provision to the greatest extent possible under applicable law and the remaining
                provisions will continue in full force and effect.
              </Typography>
              <Typography variant="h4">Waiver</Typography>
              <Typography className="description">
                Except as provided herein, the failure to exercise a right or to require performance
                of an obligation under this Terms shall not effect a party&apos;s ability to
                exercise such right or require such performance at any time thereafter nor shall be
                the waiver of a breach constitute a waiver of any subsequent breach.
              </Typography>
            </div>
            <Typography variant="h3">Translation Interpretation</Typography>
            <Typography className="description">
              These Terms and Conditions may have been translated if We have made them available to
              You on our Service. You agree that the original English text shall prevail in the case
              of a dispute.
            </Typography>
            <Typography variant="h3">Changes to These Terms and Conditions</Typography>
            <Typography className="description">
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any
              time. If a revision is material We will make reasonable efforts to provide at least 30
              days&apos; notice prior to any new terms taking effect. What constitutes a material
              change will be determined at Our sole discretion.
            </Typography>
            <Typography className="description">
              By continuing to access or use Our Service after those revisions become effective, You
              agree to be bound by the revised terms. If You do not agree to the new terms, in whole
              or in part, please stop using the website and the Service.
            </Typography>
            <Typography variant="h3">Contact Us</Typography>
            <Typography className="description">
              If you have any questions about these Terms and Conditions, You can contact us at
              info@forbole.com
            </Typography>
          </ContentBox>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default TermsAndConditions;
