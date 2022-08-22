import React from 'react';
import { render, screen, act } from '@testing-library/react';
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
// ==================================
// unit tests
// ==================================
describe('404', () => {
  it('matches snapshot', async () => {
    await act(async () => {
      global.innerWidth = 1400;
      global.dispatchEvent(new Event('resize'));
    });

    const { container } = render(
      <MockTheme>
        <Component />
      </MockTheme>,
    );

    expect(screen.getByTestId('Layout')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
