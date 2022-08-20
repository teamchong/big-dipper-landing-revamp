import type { FC } from 'react';
import classnames from 'classnames';
import { StyledSection } from './styles';
import type { SectionBoxProps } from './types';
/**
 * Component for seo sectioning and breakpoints. Not to be confused with Box.
 * Use main is the page has one main section to standardize the padding
 * @param  - FC<SectionBoxProps>
 * @returns A styled component
 */
const SectionBox: FC<SectionBoxProps> = ({
  children, className, main, ...props
}) => {
  return (
    <StyledSection className={classnames(className, { main })} {...props}>
      {children}
    </StyledSection>
  );
};

export default SectionBox;
