import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { darkTheme } from '../../styles/theme';
import { useApp } from './hooks';

/**
 * `App` is a function that takes in a `Component` and `pageProps` and returns a `StyledEngineProvider`
 * that wraps a `ThemeProvider` that wraps a `CssBaseline` that wraps a `Component` that has
 * `pageProps` passed to it
 * @param {AppProps}  - Component - The component that is being rendered.
 * @returns A styled component that is wrapped in a theme provider.
 */
const App = ({ Component, pageProps }: AppProps) => {
  useApp();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
