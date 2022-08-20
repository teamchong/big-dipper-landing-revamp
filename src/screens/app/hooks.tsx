import { useEffect } from 'react';

/**
 * This function is called when the app is loaded, and it removes the server-side injected CSS.
 */
export const useApp = () => {
  // ==========================
  // css
  // ==========================
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
};
