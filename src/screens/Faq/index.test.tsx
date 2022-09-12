/* eslint-disable react/display-name */
import { act, render, screen } from '@testing-library/react';
import { motion } from 'framer-motion';
import { MockTheme } from '~tests/mocks';
import Component from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('~src/components/Layout', () => (props: object) => (
  <motion.div data-testid="Layout" {...props} />
));
jest.mock('~src/components/SectionBox', () =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ main, ...props }: { [p: string]: unknown }) => (
    <motion.div data-testid="SectionBox" {...props} />
  )
);
jest.mock('~src/components/SectionLimit', () => (props: object) => (
  <motion.div data-testid="SectionLimit" {...props} />
));
jest.mock('~src/components/ContentBox', () => (props: object) => (
  <motion.div data-testid="ContentBox" {...props} />
));

jest.mock(
  './components/MenuDesktop',
  () =>
    ({ handleChange: _, ...props }: { [p: string]: unknown }) =>
      <div data-testid="MenuDesktop" {...props} />
);
jest.mock(
  './components/MenuMobile',
  () =>
    ({ handleChange: _, ...props }: { [p: string]: unknown }) =>
      <motion.div data-testid="MenuMobile" {...props} />
);
jest.mock(
  './components/Content',
  () =>
    ({ handleChange: _, ...props }: { [p: string]: unknown }) =>
      <motion.div data-testid="Content" {...props} />
);
// ==================================
// unit tests
// ==================================
describe('FAQ', () => {
  it('matches snapshot', async () => {
    await act(async () => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>
    );

    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(screen.getByTestId('SectionLimit')).toBeInTheDocument();
    expect(screen.getByTestId('MenuDesktop')).toBeInTheDocument();
    expect(screen.getByTestId('Content')).toBeInTheDocument();
    expect(screen.getByTestId('MenuDesktop').hasAttribute('items')).toBe(true);

    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
