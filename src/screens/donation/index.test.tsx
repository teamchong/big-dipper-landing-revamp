import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockTheme } from '@mocks';
import Component from '.';

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@src/components/layout', () => (props: object) => <div data-testid="Layout" {...props} />);
jest.mock('@src/components/section-box', () => ({ main, ...props }: { [p: string]: unknown }) => (
  <div data-testid="SectionBox" {...props} />
));
jest.mock('@src/components/section-limit', () => (props: object) => <div data-testid="SectionLimit" {...props} />);
jest.mock('@src/components/content-box', () => (props: object) => <div data-testid="ContentBox" {...props} />);
// ==================================
// unit tests
// ==================================
describe('Donation', () => {
  it('matches snapshot', async () => {
    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );

    expect(screen.getByText(/donation/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByTestId('SectionBox')).toBeInTheDocument();
    expect(screen.getByTestId('SectionLimit')).toBeInTheDocument();
    expect(screen.getAllByTestId('ContentBox').length).toBe(3);
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
