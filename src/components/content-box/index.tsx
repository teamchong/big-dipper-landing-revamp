import type { FC, HTMLAttributes } from 'react';
import { StyledDiv } from './styles';

/**
 * A functional component that takes in children and className as props.
 * @param  - FC<HTMLAttributes<HTMLElement>>
 * @returns A styled div with the children and className passed in as props.
 */
const ContentBox: FC<HTMLAttributes<HTMLElement>> = ({ children, className }) => {
  return <StyledDiv className={className}>{children}</StyledDiv>;
};

export default ContentBox;
